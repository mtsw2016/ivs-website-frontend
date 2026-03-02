# Vercel Deployment Guide - InnerVision Systems Website

This guide will help you deploy both the frontend and backend to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed: `npm install -g vercel`
3. Git repository initialized and pushed to GitHub/GitLab/Bitbucket

## Project Structure

The project has been optimized for Vercel deployment with:
- **Frontend**: React app with Create React App
- **Backend**: FastAPI Python serverless functions

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

#### Backend Deployment

1. Go to https://vercel.com/new
2. Import your repository
3. Configure the project:
   - **Project Name**: `ivs-backend` (or your preferred name)
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty (serverless function)
   - **Output Directory**: Leave empty
   
4. Add Environment Variables:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   SENDER_EMAIL=your_yahoo_email
   RECIPIENT_EMAIL=recipient_email
   YAHOO_APP_PASSWORD=your_yahoo_app_password
   CORS_ORIGINS=https://your-frontend-domain.vercel.app
   ```

5. Click **Deploy**

#### Frontend Deployment

1. Go to https://vercel.com/new again
2. Import the same repository (or create a new project)
3. Configure the project:
   - **Project Name**: `ivs-frontend` (or your preferred name)
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   
4. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   ```

5. **Important**: After backend is deployed, update the frontend's `vercel.json` file:
   - Replace `https://your-backend-url.vercel.app` with your actual backend URL
   - Redeploy the frontend

6. Click **Deploy**

### Option 2: Deploy via CLI

#### Backend

```bash
cd backend
vercel --prod
```

Follow the prompts and add environment variables when asked.

#### Frontend

```bash
cd frontend
vercel --prod
```

## Post-Deployment Configuration

### 1. Update CORS Origins

After deploying the frontend, update your backend environment variables:
- Add the frontend URL to `CORS_ORIGINS` (e.g., `https://your-app.vercel.app`)
- Redeploy the backend if needed

### 2. Update API URL in Frontend

Update the [frontend/vercel.json](frontend/vercel.json) file:
```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://YOUR-ACTUAL-BACKEND-URL.vercel.app/api/$1"
    }
  ]
}
```

### 3. Configure Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update CORS_ORIGINS accordingly

## Environment Variables Reference

### Backend (.env)
```bash
# Supabase
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=your_service_key
SUPABASE_PUBLISHABLE_KEY=your_publishable_key

# Email (Yahoo SMTP)
SENDER_EMAIL=your_email@yahoo.com
RECIPIENT_EMAIL=recipient@example.com
YAHOO_APP_PASSWORD=your_app_password

# CORS
CORS_ORIGINS=https://your-frontend.vercel.app,http://localhost:3000
```

### Frontend (.env)
```bash
REACT_APP_API_URL=https://your-backend.vercel.app
```

## Build Optimizations Applied

### Backend
✅ Vercel serverless function configuration
✅ FastAPI app exported correctly for Vercel
✅ Optimized .gitignore and .vercelignore
✅ Python dependencies in requirements.txt

### Frontend
✅ SPA routing handled via rewrites
✅ Static asset caching (1 year for immutable assets)
✅ Security headers (X-Content-Type-Options, X-Frame-Options, XSS Protection)
✅ API proxy configuration for backend
✅ Optimized .gitignore and .vercelignore

## Troubleshooting

### Backend Issues

**Problem**: 500 Internal Server Error
- Check environment variables are set correctly in Vercel dashboard
- Check logs: `vercel logs [deployment-url]`
- Ensure requirements.txt includes all dependencies

**Problem**: CORS errors
- Verify `CORS_ORIGINS` includes your frontend URL
- Check the URL format (no trailing slash)

### Frontend Issues

**Problem**: API calls failing
- Verify the backend URL in vercel.json rewrites
- Check if backend is deployed and accessible
- Inspect browser console for specific error messages

**Problem**: 404 on page refresh
- Ensure rewrites are configured in vercel.json
- Check that framework preset is set to Create React App

## Monitoring & Logs

View deployment logs:
```bash
vercel logs [deployment-url] --follow
```

Or check in the Vercel dashboard under:
**Project → Deployments → [Select Deployment] → Logs**

## Rollback

If you need to rollback:
1. Go to Vercel dashboard
2. Navigate to Deployments
3. Find the previous working deployment
4. Click "Promote to Production"

## Additional Optimizations

### Performance
- Enable Vercel Analytics in dashboard for performance monitoring
- Consider adding Vercel Speed Insights
- Optimize images using next/image or optimize before upload

### Security
- Regularly rotate API keys and passwords
- Use Vercel's environment variable encryption
- Monitor Supabase logs for suspicious activity
- Implement rate limiting if needed

## Support

For issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Check deployment logs
3. Review this guide's troubleshooting section

## Deployment Checklist

Before deploying:
- [ ] All environment variables documented
- [ ] Backend .env file created (not committed)
- [ ] Frontend .env file created (not committed)
- [ ] Git repository is clean
- [ ] No sensitive data in code
- [ ] Dependencies are up to date
- [ ] Local testing completed

After deploying:
- [ ] Backend health check works
- [ ] Frontend loads correctly
- [ ] API calls successful
- [ ] Email functionality tested
- [ ] CORS configured properly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Performance tested

---

**Congratulations!** Your InnerVision Systems website is now optimized and ready for Vercel deployment! 🚀
