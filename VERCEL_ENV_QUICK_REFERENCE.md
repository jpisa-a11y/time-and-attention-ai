# Time & Attention AI - Vercel Environment Variables Quick Reference

## 🚀 Quick Setup (5 Minutes)

### Step 1: Access Vercel Dashboard
```
https://vercel.com/dashboard → Select Project → Settings → Environment Variables
```

### Step 2: Copy & Paste These Variables

#### Production Environment
```
NODE_ENV=production
VITE_APP_TITLE=Time & Attention
VITE_APP_LOGO=/logo.png
VITE_APP_ID=time-and-attention-ai
VITE_BUILD_TARGET=es2020
VITE_BUILD_MINIFY=true
```

#### Preview Environment (Staging)
```
NODE_ENV=production
VITE_APP_TITLE=Time & Attention (Preview)
VITE_APP_LOGO=/logo.png
VITE_APP_ID=time-and-attention-ai-preview
VITE_BUILD_TARGET=es2020
VITE_BUILD_MINIFY=true
```

#### Development Environment
```
NODE_ENV=development
VITE_APP_TITLE=Time & Attention (Dev)
VITE_APP_LOGO=/logo.png
VITE_APP_ID=time-and-attention-ai-dev
VITE_BUILD_TARGET=es2020
VITE_BUILD_MINIFY=false
```

### Step 3: Redeploy
```
Deployments → Latest → Redeploy
```

---

## 📋 All Environment Variables

### Required Variables (All Environments)

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` or `development` | Environment type |
| `VITE_APP_TITLE` | `Time & Attention` | Application title |
| `VITE_APP_ID` | `time-and-attention-ai` | Unique app identifier |

### Optional Variables (Add as Needed)

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_APP_LOGO` | `/logo.png` | Logo path |
| `VITE_ANALYTICS_WEBSITE_ID` | `your-id` | Umami analytics ID |
| `VITE_ANALYTICS_ENDPOINT` | `https://analytics.example.com` | Analytics endpoint |
| `VITE_API_URL` | `https://api.example.com` | Backend API URL |
| `VITE_APP_URL` | `https://example.com` | Frontend app URL |
| `VITE_FRONTEND_FORGE_API_URL` | `https://forge.example.com` | Forge API URL |
| `VITE_FRONTEND_FORGE_API_KEY` | `your-key` | Forge API key |
| `VITE_OAUTH_PORTAL_URL` | `https://oauth.example.com` | OAuth portal URL |
| `VITE_STRIPE_PUBLIC_KEY` | `pk_test_xxx` | Stripe public key |
| `CUSTOM_DOMAIN` | `yourdomain.com` | Custom domain |
| `VITE_BUILD_TARGET` | `es2020` | Build target |
| `VITE_BUILD_MINIFY` | `true` or `false` | Minify output |

---

## 🔐 Secrets to Generate/Obtain

### 1. Stripe Keys (Optional)
```
Production:
  VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx
  STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx

Testing:
  VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
  STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
```
**Get from:** https://dashboard.stripe.com/apikeys

### 2. Umami Analytics ID (Optional)
```
VITE_ANALYTICS_WEBSITE_ID=your-website-id
VITE_ANALYTICS_ENDPOINT=https://analytics.yourdomain.com
```
**Get from:** https://umami.is dashboard

### 3. OAuth Credentials (Optional)
```
VITE_OAUTH_PORTAL_URL=https://oauth.yourdomain.com
OAUTH_SERVER_URL=https://oauth-server.yourdomain.com
JWT_SECRET=your-secure-jwt-secret-key
```
**Generate:** Use `openssl rand -base64 32` for JWT_SECRET

### 4. API Keys (Optional)
```
VITE_FRONTEND_FORGE_API_KEY=your-api-key
```
**Get from:** Your API provider

---

## 🎯 Vercel CLI Setup (Alternative)

### Automated Setup
```bash
chmod +x setup-vercel-env.sh
./setup-vercel-env.sh
```

### Manual Setup with Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add NODE_ENV
vercel env add VITE_APP_TITLE
vercel env add VITE_APP_ID

# Redeploy
vercel --prod
```

---

## 🔄 Environment Variable Propagation

### When Variables Take Effect

1. **Added/Updated** → Vercel Dashboard
2. **Redeploy Required** → Click "Redeploy" button
3. **Build Runs** → New environment loaded
4. **Deployment Complete** → Variables active

### Redeploy Steps
1. Go to Vercel Dashboard
2. Click "Deployments" tab
3. Find latest deployment
4. Click "..." menu
5. Select "Redeploy"
6. Confirm

---

## ✅ Verification Checklist

After adding environment variables:

- [ ] All required variables added
- [ ] Production variables use production keys
- [ ] Preview variables use test/staging keys
- [ ] Redeployed after adding variables
- [ ] Checked deployment logs for errors
- [ ] Verified in browser (F12 → Console)
- [ ] Tested key functionality

### Verify in Browser Console
```javascript
// Check if variables loaded
console.log(import.meta.env.VITE_APP_TITLE)
console.log(import.meta.env.VITE_APP_ID)
console.log(import.meta.env.NODE_ENV)
```

---

## 🐛 Troubleshooting

### Variables Not Loading
```
✓ Verify variable names start with VITE_
✓ Check spelling and capitalization
✓ Redeploy after adding variables
✓ Clear browser cache (Ctrl+Shift+Delete)
✓ Check deployment logs for errors
```

### Build Fails
```
✓ Check all required variables are set
✓ Verify variable values are not empty
✓ Look for typos in variable names
✓ Check Vercel build logs for details
```

### API Calls Failing
```
✓ Verify API URLs are correct
✓ Check API is accessible from Vercel
✓ Verify API keys are valid and not expired
✓ Check CORS configuration on API
```

---

## 📱 Environment-Specific URLs

### Production
- **App URL:** `https://yourdomain.com`
- **API URL:** `https://api.yourdomain.com`
- **Analytics:** `https://analytics.yourdomain.com`

### Preview/Staging
- **App URL:** `https://preview.yourdomain.com`
- **API URL:** `https://api-preview.yourdomain.com`
- **Analytics:** `https://analytics-preview.yourdomain.com`

### Development (Local)
- **App URL:** `http://localhost:5173`
- **API URL:** `http://localhost:3000`
- **Analytics:** `http://localhost:3001`

---

## 🔒 Security Reminders

✅ **DO:**
- Use production keys only in production environment
- Use test keys in preview/development
- Rotate keys regularly (every 90 days)
- Use Vercel's built-in secrets management
- Audit who has access to secrets

❌ **DON'T:**
- Commit secrets to GitHub
- Share secrets in messages/emails
- Use same keys across environments
- Leave secrets in code comments
- Use weak or predictable secrets

---

## 📞 Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Environment Variables Guide:** https://vercel.com/docs/concepts/projects/environment-variables
- **Stripe Dashboard:** https://dashboard.stripe.com
- **Umami Analytics:** https://umami.is

---

## 📝 Notes

- Frontend variables must start with `VITE_` to be accessible in browser
- Backend variables don't need `VITE_` prefix
- Changes require redeployment to take effect
- Preview deployments use preview environment variables
- Production deployments use production environment variables

---

**Last Updated:** January 20, 2025  
**Version:** 1.0
