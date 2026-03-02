# InnerVision Systems Website

A modern, full-stack web application built with React and FastAPI, optimized for Vercel deployment.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.9+
- Vercel account (for deployment)

### Local Development

#### Backend
```bash
cd backend
python -m venv venv_ivs
# Windows
venv_ivs\Scripts\activate
# macOS/Linux
source venv_ivs/bin/activate

pip install -r requirements.txt
cp .env.example .env
# Edit .env with your credentials

uvicorn server:app --reload --port 8000
```

#### Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your API URL

npm start
```

## 📦 Project Structure

```
ivs-website/
├── backend/              # FastAPI Python backend
│   ├── api/             # Vercel serverless functions
│   ├── server.py        # Main FastAPI application
│   ├── requirements.txt # Python dependencies
│   ├── vercel.json      # Backend Vercel configuration
│   └── .env.example     # Environment variables template
├── frontend/            # React frontend
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   ├── package.json    # Node dependencies
│   ├── vercel.json     # Frontend Vercel configuration
│   └── .env.example    # Environment variables template
├── vercel.json         # Root Vercel configuration
└── DEPLOYMENT.md       # Detailed deployment guide
```

## ✨ Vercel Optimizations

### Backend Optimizations
✅ **Serverless Function Setup** - Configured FastAPI for Vercel's serverless environment
✅ **API Entry Point** - Created `/api/index.py` for Vercel routing
✅ **Optimized Dependencies** - Minimal `requirements.txt` for faster cold starts
✅ **Environment Variables** - Secure configuration with `.env` support
✅ **CORS Configuration** - Proper cross-origin setup for production

### Frontend Optimizations
✅ **Static Asset Caching** - 1-year cache for immutable assets
✅ **Security Headers** - Added X-Content-Type-Options, X-Frame-Options, XSS Protection
✅ **SPA Routing** - Proper rewrites for client-side routing
✅ **API Proxy** - Configured proxying to backend API
✅ **Build Optimization** - Optimized Create React App build configuration

### General Optimizations
✅ **Monorepo Structure** - Separate frontend and backend deployments
✅ **Ignore Files** - Comprehensive `.gitignore` and `.vercelignore` files
✅ **Environment Templates** - `.env.example` files for easy setup
✅ **Deployment Guide** - Detailed step-by-step instructions

## 🌐 Deployment

The project is **fully optimized for Vercel** deployment. Follow the comprehensive guide:

📖 **[Read DEPLOYMENT.md](DEPLOYMENT.md)** for detailed deployment instructions

### Quick Deploy

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Deploy backend from `/backend` directory
4. Deploy frontend from `/frontend` directory
5. Configure environment variables
6. Update API URLs

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Supabase** - Database and authentication
- **Python-dotenv** - Environment management
- **SMTP** - Email functionality (Yahoo)

### Frontend
- **React 19** - UI library
- **Create React App** - Build tooling with CRACO
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📝 Environment Variables

### Backend
```bash
SUPABASE_URL=           # Your Supabase project URL
SUPABASE_KEY=           # Service role key
SUPABASE_PUBLISHABLE_KEY= # Anon/public key
SENDER_EMAIL=           # Yahoo email for sending
RECIPIENT_EMAIL=        # Email to receive form submissions
YAHOO_APP_PASSWORD=     # Yahoo app-specific password
CORS_ORIGINS=           # Allowed origins (comma-separated)
```

### Frontend
```bash
REACT_APP_API_URL=      # Backend API URL
```

See `.env.example` files in each directory for templates.

## 🔒 Security Features

- Environment variable encryption
- Secure CORS configuration
- XSS protection headers
- Content type sniffing prevention
- Clickjacking protection
- HTTPS enforcement via Vercel
- Sensitive data exclusion from version control

## 📊 Performance Features

- Static asset caching (31536000s for immutable content)
- Serverless function cold start optimization
- Optimized bundle size
- Code splitting (Create React App)
- Lazy loading support
- CDN distribution via Vercel Edge Network

## 🧪 Testing

### Backend
```bash
cd backend
pytest  # (if tests are added)
```

### Frontend
```bash
cd frontend
npm test
```

## 📄 License

[Add your license here]

## 👥 Contributors

InnerVision Systems Team

## 📞 Support

For deployment issues, see [DEPLOYMENT.md](DEPLOYMENT.md) troubleshooting section.

---

**Built with ❤️ for optimal performance and developer experience**
