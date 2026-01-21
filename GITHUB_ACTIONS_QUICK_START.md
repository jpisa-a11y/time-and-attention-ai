# GitHub Actions + Vercel - Quick Start (5 Minutes)

## 🚀 Setup in 5 Steps

### Step 1: Get Vercel Secrets (2 minutes)

**Vercel Token:**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Copy the token

**Vercel Org ID:**
1. Go to https://vercel.com/dashboard → Settings → General
2. Copy "Team ID"

**Vercel Project ID:**
1. Go to your Vercel project → Settings → General
2. Copy "Project ID"

### Step 2: Add GitHub Secrets (1 minute)

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add these 3 secrets:

```
VERCEL_TOKEN = [paste from step 1]
VERCEL_ORG_ID = [paste from step 1]
VERCEL_PROJECT_ID = [paste from step 1]
```

### Step 3: Add Workflow File (1 minute)

1. Create `.github/workflows/vercel-deploy.yml`
2. Copy contents from `vercel-deploy.yml` file
3. Commit and push

### Step 4: Verify Setup (30 seconds)

1. Go to repository → Actions tab
2. You should see "Deploy to Vercel" workflow
3. Push a commit to trigger it

### Step 5: Monitor Deployment (30 seconds)

1. Go to Actions → Latest workflow run
2. Watch jobs complete
3. Check Vercel dashboard for deployment

---

## 📋 What Gets Deployed

| Trigger | Deployment | Environment |
|---------|-----------|-------------|
| Push to `main` | ✅ Production | Production |
| Pull Request | ✅ Preview | Preview |
| Push to `develop` | ❌ None | N/A |

---

## 🔄 Workflow Jobs

1. **Lint & Type Check** - Code quality
2. **Build & Test** - Build application
3. **Deploy to Vercel (Preview)** - On PR
4. **Deploy to Vercel (Production)** - On main push
5. **Performance Check** - Bundle analysis
6. **Security Check** - Vulnerability scan
7. **Notify Success** - Success notification
8. **Notify Failure** - Failure notification

---

## 📊 Monitoring

### View Deployments
- GitHub: Repository → Actions tab
- Vercel: Dashboard → Deployments tab

### View Logs
- Click workflow run → Click job → View logs

### View Errors
- Check "Deploy to Vercel" job logs
- Check Vercel dashboard for build errors

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Workflow not running | Check workflow file in `.github/workflows/` |
| Deployment fails | Check Vercel token is valid |
| Secrets not found | Verify secret names (case-sensitive) |
| Build times out | Optimize dependencies |
| Preview URL not showing | Check PR comment permissions |

---

## 🔐 Security

✅ **DO:**
- Rotate Vercel token every 90 days
- Use GitHub secrets, not .env files
- Audit secret access regularly

❌ **DON'T:**
- Commit secrets to GitHub
- Share tokens in messages
- Use personal access tokens

---

## 📞 Quick Links

- **Vercel Tokens:** https://vercel.com/account/tokens
- **GitHub Secrets:** https://github.com/jpisa-a11y/time-and-attention-ai/settings/secrets/actions
- **Workflow Status:** https://github.com/jpisa-a11y/time-and-attention-ai/actions
- **Vercel Dashboard:** https://vercel.com/dashboard

---

## ✅ Checklist

- [ ] Vercel token created
- [ ] GitHub secrets added (3 secrets)
- [ ] Workflow file in `.github/workflows/vercel-deploy.yml`
- [ ] Workflow file committed and pushed
- [ ] Test deployment triggered
- [ ] Preview deployment works on PR
- [ ] Production deployment works on main

---

**You're all set! 🎉**

Your GitHub Actions workflow is now automatically deploying to Vercel on every push to main and creating preview deployments for pull requests.

---

**Last Updated:** January 20, 2025
