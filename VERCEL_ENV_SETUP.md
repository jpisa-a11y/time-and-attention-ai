# Time & Attention AI - Vercel Environment Variables Setup Guide

## 📋 Overview

This guide provides step-by-step instructions for configuring environment variables for Vercel deployment of the Time & Attention AI website.

---

## 🔑 Environment Variables by Environment

### Production Environment

Set these variables in Vercel Dashboard → Settings → Environment Variables → Production

```
NODE_ENV=production
VITE_APP_TITLE=Time & Attention
VITE_APP_LOGO=/logo.png
VITE_APP_ID=time-and-attention-ai
VITE_ANALYTICS_WEBSITE_ID=your-umami-analytics-id
VITE_ANALYTICS_ENDPOINT=https://analytics.yourdomain.com
VITE_API_URL=https://api.yourdomain.com
VITE_APP_URL=https://yourdomain.com
VITE_FRONTEND_FORGE_API_URL=https://forge.yourdomain.com
VITE_FRONTEND_FORGE_API_KEY=your-forge-api-key
VITE_OAUTH_PORTAL_URL=https://oauth.yourdomain.com
VITE_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
VITE_BUILD_TARGET=es2020
VITE_BUILD_MINIFY=true
```

### Preview Environment (Staging)

Set these variables in Vercel Dashboard → Settings → Environment Variables → Preview

```
NODE_ENV=production
VITE_APP_TITLE=Time & Attention (Preview)
VITE_APP_LOGO=/logo.png
VITE_APP_ID=time-and-attention-ai-preview
VITE_ANALYTICS_WEBSITE_ID=your-umami-analytics-id-preview
VITE_ANALYTICS_ENDPOINT=https://analytics-preview.yourdomain.com
VITE_API_URL=https://api-preview.yourdomain.com
VITE_APP_URL=https://preview.yourdomain.com
VITE_FRONTEND_FORGE_API_URL=https://forge-preview.yourdomain.com
VITE_FRONTEND_FORGE_API_KEY=your-forge-api-key-preview
VITE_OAUTH_PORTAL_URL=https://oauth-preview.yourdomain.com
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
VITE_BUILD_TARGET=es2020
VITE_BUILD_MINIFY=true
```

### Development Environment

Set these variables in Vercel Dashboard → Settings → Environment Variables → Development

```
NODE_ENV=development
VITE_APP_TITLE=Time & Attention (Dev)
VITE_APP_LOGO=/logo.png
VITE_APP_ID=time-and-attention-ai-dev
VITE_ANALYTICS_WEBSITE_ID=your-umami-analytics-id-dev
VITE_ANALYTICS_ENDPOINT=https://analytics-dev.yourdomain.com
VITE_API_URL=http://localhost:3000
VITE_APP_URL=http://localhost:5173
VITE_FRONTEND_FORGE_API_URL=http://localhost:3000
VITE_FRONTEND_FORGE_API_KEY=dev-key
VITE_OAUTH_PORTAL_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
VITE_BUILD_TARGET=es2020
VITE_BUILD_MINIFY=false
```

---

## 🔐 Required Secrets & How to Obtain Them

### 1. **Umami Analytics** (Optional but Recommended)
**Purpose:** Track website analytics and user behavior

**How to get:**
1. Sign up at https://umami.is or self-host
2. Create a new website
3. Copy the Website ID from dashboard
4. Copy the analytics endpoint URL

**Variables:**
```
VITE_ANALYTICS_WEBSITE_ID=your-website-id
VITE_ANALYTICS_ENDPOINT=https://analytics.yourdomain.com
```

---

### 2. **Stripe** (Optional - for payments)
**Purpose:** Payment processing for premium features

**How to get:**
1. Sign up at https://stripe.com
2. Go to Developers → API Keys
3. Copy Publishable Key (starts with `pk_`)
4. Keep Secret Key secure (starts with `sk_`)

**Variables:**
```
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx (for testing)
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx (for production)
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx (for testing)
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx (for production)
```

---

### 3. **OAuth Configuration** (Optional - for user authentication)
**Purpose:** User authentication and authorization

**How to get:**
1. Set up OAuth server or use third-party provider
2. Register your application
3. Obtain OAuth credentials
4. Configure redirect URIs

**Variables:**
```
VITE_OAUTH_PORTAL_URL=https://oauth.yourdomain.com
OAUTH_SERVER_URL=https://oauth-server.yourdomain.com
JWT_SECRET=your-secure-jwt-secret-key
```

---

### 4. **API Configuration**
**Purpose:** Backend API endpoints

**How to get:**
1. Deploy or host your backend API
2. Obtain API URLs for different environments
3. Generate API keys if needed

**Variables:**
```
VITE_API_URL=https://api.yourdomain.com
VITE_APP_URL=https://yourdomain.com
VITE_FRONTEND_FORGE_API_URL=https://forge.yourdomain.com
VITE_FRONTEND_FORGE_API_KEY=your-api-key
```

---

### 5. **Custom Domain** (Optional)
**Purpose:** Use custom domain instead of vercel.app

**How to get:**
1. Register domain at registrar (GoDaddy, Namecheap, etc.)
2. Update DNS records to point to Vercel
3. Add domain in Vercel dashboard

**Variables:**
```
CUSTOM_DOMAIN=yourdomain.com
```

---

## 📝 Step-by-Step Setup Instructions

### Step 1: Access Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project "time-and-attention-ai"
3. Click "Settings" tab
4. Click "Environment Variables" in left sidebar

### Step 2: Add Production Variables

1. Select "Production" from the environment dropdown
2. Click "Add New"
3. Enter variable name and value
4. Click "Save"
5. Repeat for all production variables

**Example:**
```
Name: NODE_ENV
Value: production
Environment: Production
```

### Step 3: Add Preview Variables

1. Select "Preview" from the environment dropdown
2. Repeat the process for preview variables

### Step 4: Add Development Variables

1. Select "Development" from the environment dropdown
2. Repeat the process for development variables

### Step 5: Redeploy

1. Go to "Deployments" tab
2. Click the three dots on latest deployment
3. Select "Redeploy"
4. Confirm redeploy

---

## 🔒 Security Best Practices

### 1. **Never Commit Secrets**
```bash
# Add to .gitignore
.env.local
.env.production.local
.env.preview.local
```

### 2. **Use Vercel Secrets for Sensitive Data**
- API keys
- JWT secrets
- Database credentials
- Third-party service tokens

### 3. **Rotate Secrets Regularly**
- Change API keys every 90 days
- Update JWT secrets after key rotation
- Monitor for unauthorized access

### 4. **Separate Secrets by Environment**
- Use different keys for production vs. preview
- Use test keys for development
- Never use production keys in development

### 5. **Audit Secret Access**
- Review who has access to secrets
- Use Vercel's audit logs
- Monitor for suspicious activity

---

## 🧪 Testing Variables Locally

### Before Deployment

1. **Create `.env.local` file:**
```bash
cp .env.example .env.local
```

2. **Fill in test values:**
```
NODE_ENV=development
VITE_APP_TITLE=Time & Attention (Local)
VITE_ANALYTICS_WEBSITE_ID=test-id
# ... other variables
```

3. **Test locally:**
```bash
pnpm dev
# Check browser console for any errors
# Verify analytics tracking
# Test API calls
```

4. **Verify variables are loaded:**
```bash
# In browser console
console.log(import.meta.env.VITE_APP_TITLE)
```

---

## 🚀 Deployment Checklist

Before deploying to Vercel:

- [ ] All environment variables added to Vercel dashboard
- [ ] Secrets are correct and not expired
- [ ] Production variables use production keys
- [ ] Preview variables use staging/test keys
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate installed
- [ ] Tested locally with .env.local
- [ ] Verified in preview deployment first
- [ ] Monitored logs after production deployment

---

## 📊 Environment Variables Reference Table

| Variable | Type | Required | Environment | Purpose |
|----------|------|----------|-------------|---------|
| `NODE_ENV` | String | Yes | All | Node environment |
| `VITE_APP_TITLE` | String | Yes | All | App display name |
| `VITE_APP_LOGO` | String | No | All | Logo path |
| `VITE_APP_ID` | String | Yes | All | Unique app identifier |
| `VITE_ANALYTICS_WEBSITE_ID` | String | No | All | Analytics tracking ID |
| `VITE_ANALYTICS_ENDPOINT` | String | No | All | Analytics server URL |
| `VITE_API_URL` | String | No | All | Backend API URL |
| `VITE_APP_URL` | String | No | All | Frontend app URL |
| `VITE_FRONTEND_FORGE_API_URL` | String | No | All | Forge API URL |
| `VITE_FRONTEND_FORGE_API_KEY` | String | No | All | Forge API key |
| `VITE_OAUTH_PORTAL_URL` | String | No | All | OAuth portal URL |
| `VITE_STRIPE_PUBLIC_KEY` | String | No | All | Stripe public key |
| `STRIPE_SECRET_KEY` | String | No | All | Stripe secret key |
| `OAUTH_SERVER_URL` | String | No | All | OAuth server URL |
| `JWT_SECRET` | String | No | All | JWT signing secret |
| `CUSTOM_DOMAIN` | String | No | All | Custom domain name |
| `VITE_BUILD_TARGET` | String | No | All | Build target ES version |
| `VITE_BUILD_MINIFY` | Boolean | No | All | Minify build output |

---

## 🔧 Troubleshooting

### Variables Not Loading

**Problem:** Variables show as undefined in browser

**Solution:**
1. Verify variable names start with `VITE_`
2. Redeploy after adding variables
3. Clear browser cache
4. Check browser console for errors

### Build Fails with Missing Variables

**Problem:** Build fails with "Cannot find variable"

**Solution:**
1. Verify all required variables are set
2. Check variable names for typos
3. Ensure variables are in correct environment
4. Redeploy after adding missing variables

### API Calls Failing

**Problem:** API endpoints return 404 or connection errors

**Solution:**
1. Verify API URLs are correct
2. Check API is accessible from Vercel
3. Verify API keys are valid
4. Check CORS configuration

### Analytics Not Tracking

**Problem:** Analytics data not appearing

**Solution:**
1. Verify analytics ID is correct
2. Check analytics endpoint is accessible
3. Verify analytics script is loaded
4. Check browser console for errors

---

## 📞 Support Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Environment Variables Guide:** https://vercel.com/docs/concepts/projects/environment-variables
- **Stripe Documentation:** https://stripe.com/docs
- **Umami Analytics:** https://umami.is/docs
- **OAuth 2.0 Guide:** https://oauth.net/2/

---

## 📝 Notes

- All variables are case-sensitive
- Frontend variables must start with `VITE_`
- Backend variables don't need `VITE_` prefix
- Changes to environment variables require redeployment
- Preview deployments use preview variables
- Production deployments use production variables

---

**Last Updated:** January 20, 2025  
**Version:** 1.0
