from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ.get('SUPABASE_KEY') or os.environ['SUPABASE_PUBLISHABLE_KEY']
supabase: Client = create_client(supabase_url, supabase_key)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class StatusCheckUpdate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for Supabase
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    supabase.table('status_checks').insert(doc).execute()
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Get all status checks from Supabase
    response = supabase.table('status_checks').select('*').execute()
    status_checks = response.data
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.put("/status/{status_id}", response_model=StatusCheck)
async def update_status_check(status_id: str, input: StatusCheckUpdate):
    updated_doc = {
        "client_name": input.client_name,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }

    response = (
        supabase
        .table('status_checks')
        .update(updated_doc)
        .eq('id', status_id)
        .execute()
    )

    if not response.data:
        raise HTTPException(status_code=404, detail="Status check not found")

    row = response.data[0]
    if isinstance(row.get('timestamp'), str):
        row['timestamp'] = datetime.fromisoformat(row['timestamp'])

    return StatusCheck(**row)

# Contact Form Models
class ContactFormRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    service: Optional[str] = ""
    message: str

class ContactFormResponse(BaseModel):
    status: str
    message: str

def send_contact_email(form_data: dict):
    """Send contact form email via Yahoo SMTP"""
    sender_email = os.environ.get('SENDER_EMAIL')
    recipient_email = os.environ.get('RECIPIENT_EMAIL')
    app_password = os.environ.get('YAHOO_APP_PASSWORD')

    subject = f"New Inquiry from {form_data['name']} - InnerVision Systems"

    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f172a; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #f59e0b; margin: 0;">New Contact Form Inquiry</h2>
            <p style="color: #94a3b8; margin: 4px 0 0;">InnerVision Systems Website</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
                    <td style="padding: 8px 0;">{form_data['name']}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:{form_data['email']}" style="color: #0d9488;">{form_data['email']}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                    <td style="padding: 8px 0;">{form_data.get('phone', 'N/A') or 'N/A'}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
                    <td style="padding: 8px 0;">{form_data.get('service', 'N/A') or 'N/A'}</td>
                </tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;">
                <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Message:</p>
                <p style="margin: 0; line-height: 1.6;">{form_data['message']}</p>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #94a3b8;">
                Received on {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
            </p>
        </div>
    </body>
    </html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"InnerVision Systems <{sender_email}>"
    msg["To"] = recipient_email
    msg.attach(MIMEText(html_content, "html"))

    try:
        with smtplib.SMTP_SSL("smtp.mail.yahoo.com", 465) as server:
            server.login(sender_email, app_password)
            server.sendmail(sender_email, recipient_email, msg.as_string())
        logger.info(f"Email sent successfully via Yahoo SMTP to {recipient_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email via Yahoo SMTP: {str(e)}")
        raise

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(request: ContactFormRequest, background_tasks: BackgroundTasks):
    """Submit contact form and send email notification"""
    try:
        # Save to Supabase
        form_dict = request.model_dump()
        form_dict['timestamp'] = datetime.now(timezone.utc).isoformat()
        form_dict['id'] = str(uuid.uuid4())
        supabase.table('contact_submissions').insert(form_dict).execute()

        # Send email in background
        background_tasks.add_task(send_contact_email, form_dict)

        return ContactFormResponse(
            status="success",
            message="Your message has been sent! We'll get back to you within 24 hours."
        )
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit your message. Please try again.")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)