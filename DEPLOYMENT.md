# Time & Attention AI - Deployment Guide
## Complete Instructions for Deploying to Multiple Platforms

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Prerequisites](#prerequisites)
3. [Local Deployment](#local-deployment)
4. [Cloud Deployment](#cloud-deployment)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Troubleshooting](#troubleshooting)
7. [Monitoring & Maintenance](#monitoring--maintenance)

---

## 🚀 Quick Start

### Deploy Locally (Development)
```bash
# Make script executable
chmod +x deploy.sh

# Deploy for development
./deploy.sh development local
```

### Deploy to Production
```bash
# Deploy to Vercel
./deploy.sh production vercel

# Or deploy to Netlify
./deploy.sh production netlify

# Or deploy to Railway
./deploy.sh production railway
```

---

## 📦 Prerequisites

### Required Software
- **Node.js** 22.13.0 or higher
- **npm** 10.0.0 or higher
- **pnpm** 10.15.1 or higher
- **Git** 2.0 or higher

### Installation

**macOS (using Homebrew):**
```bash
brew install node
npm install -g pnpm
```

**Ubuntu/Debian:**
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm
```

**Windows (using Chocolatey):**
```bash
choco install nodejs
npm install -g pnpm
```

### Verify Installation
```bash
node --version      # Should be v22.13.0 or higher
npm --version       # Should be 10.0.0 or higher
pnpm --version      # Should be 10.15.1 or higher
```

---

## 🏠 Local Deployment

### Development Environment

**Start development server:**
```bash
./deploy.sh development local
```

This will:
1. Check prerequisites
2. Install dependencies
3. Start Vite dev server on port 5173
4. Watch for file changes and hot reload

**Access the application:**
- URL: http://localhost:5173
- The dev server will automatically reload when you make changes

### Production Environment (Local)

**Build and run production server:**
```bash
./deploy.sh production local
```

This will:
1. Check prerequisites
2. Install dependencies
3. Run tests
4. Build the application
5. Start production server on port 3000

**Access the application:**
- URL: http://localhost:3000

### Stopping the Server

**Development:**
```bash
# Press Ctrl+C in the terminal running the dev server
```

**Production:**
```bash
# Press Ctrl+C in the terminal running the server
# Or kill the process:
kill $(lsof -t -i:3000)
```

---

## ☁️ Cloud Deployment

### 1. Vercel Deployment

**Prerequisites:**
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel

**Method 1: Using Deploy Script**
```bash
./deploy.sh production vercel
```

**Method 2: Using Vercel CLI**
```bash
npm install -g vercel
vercel --prod
```

**Method 3: GitHub Integration (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel dashboard
3. Vercel automatically deploys on push to main branch

**Environment Variables:**
Set in Vercel dashboard under Settings > Environment Variables:
```
VITE_APP_TITLE=Time & Attention
VITE_ANALYTICS_WEBSITE_ID=your-id
NODE_ENV=production
```

**Custom Domain:**
1. Go to Vercel dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update DNS records as instructed

---

### 2. Netlify Deployment

**Prerequisites:**
- Netlify account (https://netlify.com)
- GitHub repository

**Method 1: Using Deploy Script**
```bash
./deploy.sh production netlify
```

**Method 2: Using Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Method 3: GitHub Integration (Recommended)**
1. Connect GitHub repository to Netlify
2. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. Netlify automatically deploys on push

**Environment Variables:**
Set in Netlify dashboard under Site settings > Build & deploy > Environment:
```
VITE_APP_TITLE=Time & Attention
VITE_ANALYTICS_WEBSITE_ID=your-id
NODE_ENV=production
```

**Custom Domain:**
1. Go to Netlify dashboard
2. Navigate to Domain settings
3. Add custom domain
4. Update DNS records

---

### 3. Railway Deployment

**Prerequisites:**
- Railway account (https://railway.app)
- GitHub repository

**Method 1: Using Deploy Script**
```bash
./deploy.sh production railway
```

**Method 2: Using Railway CLI**
```bash
npm install -g @railway/cli
railway up
```

**Method 3: Web Dashboard (Recommended)**
1. Connect GitHub repository to Railway
2. Create new project
3. Select repository
4. Configure environment variables
5. Deploy

**Environment Variables:**
Set in Railway dashboard:
```
NODE_ENV=production
VITE_APP_TITLE=Time & Attention
VITE_ANALYTICS_WEBSITE_ID=your-id
```

---

### 4. Docker Deployment

**Build Docker Image:**
```bash
./deploy.sh production docker
```

**Or manually:**
```bash
docker build -t time-and-attention-ai:latest .
```

**Run Docker Container:**
```bash
docker run -d -p 3000:3000 \
  --name time-and-attention \
  -e NODE_ENV=production \
  time-and-attention-ai:latest
```

**Access the application:**
- URL: http://localhost:3000

**Push to Docker Hub:**
```bash
docker tag time-and-attention-ai:latest username/time-and-attention-ai:latest
docker push username/time-and-attention-ai:latest
```

---

### 5. Manus Deployment (Built-in)

**Prerequisites:**
- Manus account
- Project initialized with webdev_init_project

**Steps:**
1. Create a checkpoint:
   ```bash
   webdev_save_checkpoint
   ```

2. Click "Publish" button in Management UI

3. Configure domain:
   - Go to Settings > Domains
   - Add custom domain or use auto-generated domain
   - Configure DNS if using custom domain

4. Access your application:
   - Auto-generated: `xxx.manus.space`
   - Custom domain: `yourdomain.com`

---

## 🔄 CI/CD Pipeline

### GitHub Actions Setup

**1. Add Secrets to GitHub:**
1. Go to repository Settings > Secrets and variables > Actions
2. Add the following secrets:

```
VERCEL_TOKEN          # From Vercel account settings
VERCEL_ORG_ID         # From Vercel dashboard
VERCEL_PROJECT_ID     # From Vercel project settings
NETLIFY_AUTH_TOKEN    # From Netlify account settings
NETLIFY_SITE_ID       # From Netlify site settings
DOCKER_USERNAME       # Your Docker Hub username
DOCKER_PASSWORD       # Your Docker Hub password
```

**2. Add Workflow File:**
Copy `github-actions-workflow.yml` to `.github/workflows/deploy.yml`:

```bash
mkdir -p .github/workflows
cp github-actions-workflow.yml .github/workflows/deploy.yml
```

**3. Commit and Push:**
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions CI/CD pipeline"
git push origin main
```

**4. Monitor Deployments:**
- Go to repository Actions tab
- View workflow runs and logs
- Check deployment status

### Workflow Triggers

The CI/CD pipeline automatically runs when:
- Code is pushed to `main` branch
- Pull request is created against `main` or `develop`

### Workflow Jobs

1. **Lint & Test** - Runs linter and tests
2. **Build** - Builds the application
3. **Deploy to Vercel** - Deploys to Vercel (main branch only)
4. **Deploy to Netlify** - Deploys to Netlify (main branch only)
5. **Build & Push Docker** - Builds and pushes Docker image (main branch only)
6. **Notify Success/Failure** - Sends notifications

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Fails with "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

#### 2. Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
PORT=3001 pnpm start
```

#### 3. Deployment Fails with Permission Denied
```bash
# Make script executable
chmod +x deploy.sh
chmod +x deploy-vercel.sh
chmod +x deploy-netlify.sh
```

#### 4. Environment Variables Not Loaded
```bash
# Check .env file exists
ls -la .env*

# Verify variables are set
echo $VITE_APP_TITLE
```

#### 5. Build Output Too Large
```bash
# Check build size
du -sh dist

# Remove unnecessary dependencies
pnpm prune --prod
```

### Debug Mode

Enable verbose output:
```bash
VERBOSE=true ./deploy.sh production vercel
```

### Check Logs

**Local:**
```bash
# Development
pnpm dev 2>&1 | tee dev.log

# Production
pnpm start 2>&1 | tee prod.log
```

**Docker:**
```bash
docker logs time-and-attention
docker logs -f time-and-attention  # Follow logs
```

**Vercel:**
- Check Vercel dashboard > Deployments > Logs

**Netlify:**
- Check Netlify dashboard > Deploys > Logs

---

## 📊 Monitoring & Maintenance

### Health Checks

**Local Server:**
```bash
curl http://localhost:3000
```

**Remote Server:**
```bash
curl https://yourdomain.com
```

### Performance Monitoring

**Build Performance:**
```bash
time pnpm build
```

**Bundle Analysis:**
```bash
# Check dist size
du -sh dist
ls -lh dist
```

### Log Monitoring

**Docker:**
```bash
docker logs -f time-and-attention --tail 100
```

**Vercel:**
- Dashboard > Deployments > Logs
- Real-time logs for debugging

**Netlify:**
- Dashboard > Deploys > Logs
- Deploy logs and runtime logs

### Uptime Monitoring

Set up monitoring services:
- **Uptime Robot** (https://uptimerobot.com)
- **Pingdom** (https://www.pingdom.com)
- **StatusPage** (https://www.statuspage.io)

### Backup & Recovery

**Backup code:**
```bash
git clone https://github.com/jpisa-a11y/time-and-attention-ai.git backup
```

**Rollback to previous deployment:**
- Vercel: Dashboard > Deployments > Select previous > Promote
- Netlify: Dashboard > Deploys > Select previous > Publish
- Docker: `docker run <previous-image-id>`

---

## 📝 Environment Variables Reference

### Required Variables
```
NODE_ENV=production
VITE_APP_TITLE=Time & Attention
```

### Optional Variables
```
VITE_APP_LOGO=/logo.png
VITE_ANALYTICS_WEBSITE_ID=your-id
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_API_URL=https://api.example.com
VITE_APP_URL=https://app.example.com
CUSTOM_DOMAIN=yourdomain.com
```

---

## 🎯 Deployment Checklist

Before deploying to production:

- [ ] Code review completed
- [ ] Tests passing locally
- [ ] Build succeeds without errors
- [ ] Environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate installed
- [ ] Database migrations completed (if applicable)
- [ ] Monitoring set up
- [ ] Backup created
- [ ] Team notified of deployment

---

## 📞 Support

For issues or questions:
1. Check troubleshooting section
2. Review platform-specific documentation
3. Check GitHub Issues
4. Contact support team

---

**Last Updated:** January 20, 2025  
**Version:** 1.0
