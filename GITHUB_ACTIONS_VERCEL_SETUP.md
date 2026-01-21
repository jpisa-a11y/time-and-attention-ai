# GitHub Actions + Vercel Deployment Setup Guide

## 📋 Overview

This guide provides step-by-step instructions for setting up GitHub Actions to automatically deploy the Time & Attention website to Vercel on every push to the main branch.

---

## 🚀 Quick Start (10 Minutes)

### Step 1: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

| Secret Name | Value | How to Get |
|-------------|-------|-----------|
| `VERCEL_TOKEN` | Your Vercel API token | [Vercel Account Settings](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel organization ID | Vercel dashboard → Settings → General |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | Vercel project → Settings → General |

### Step 2: Add Workflow File

1. Create `.github/workflows/vercel-deploy.yml` in your repository
2. Copy the contents from `vercel-deploy.yml`
3. Commit and push to main branch

### Step 3: Verify Setup

1. Go to repository **Actions** tab
2. You should see "Deploy to Vercel" workflow
3. Push a commit to trigger the workflow

---

## 🔐 Getting Required Secrets

### 1. Vercel Token

**Steps:**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it: `GitHub Actions`
4. Set expiration: 90 days (recommended)
5. Copy the token
6. Add to GitHub as `VERCEL_TOKEN` secret

**Keep this token secure!** Never commit it to GitHub.

### 2. Vercel Organization ID

**Steps:**
1. Go to https://vercel.com/dashboard
2. Click **Settings** → **General**
3. Look for "Team ID" or "Organization ID"
4. Copy the ID
5. Add to GitHub as `VERCEL_ORG_ID` secret

### 3. Vercel Project ID

**Steps:**
1. Go to your Vercel project
2. Click **Settings** → **General**
3. Look for "Project ID"
4. Copy the ID
5. Add to GitHub as `VERCEL_PROJECT_ID` secret

---

## 📁 File Structure

```
.github/
└── workflows/
    └── vercel-deploy.yml       # Main deployment workflow
```

---

## 🔄 Workflow Jobs

The workflow includes 8 jobs that run automatically:

### 1. **Lint & Type Check**
- Runs TypeScript type checking
- Runs code formatter checks
- Fails if code doesn't meet standards

### 2. **Build & Test**
- Installs dependencies
- Builds the application
- Uploads build artifacts
- Checks build output

### 3. **Deploy to Vercel (Preview)**
- Runs on pull requests
- Deploys to preview environment
- Comments on PR with preview URL
- Allows testing before merge

### 4. **Deploy to Vercel (Production)**
- Runs on push to main branch
- Deploys to production
- Updates deployment status
- Creates production deployment

### 5. **Performance Check**
- Analyzes bundle size
- Checks JavaScript file sizes
- Reports on build optimization

### 6. **Security Check**
- Runs npm audit
- Scans for secrets
- Checks for vulnerabilities

### 7. **Notify Success**
- Logs successful deployment
- Provides deployment details

### 8. **Notify Failure**
- Logs failed deployment
- Comments on PR with failure details

---

## 📊 Workflow Triggers

The workflow automatically runs when:

### On Push to Main
```
Push to main branch
    ↓
Lint & Type Check
    ↓
Build & Test
    ↓
Deploy to Vercel (Production)
    ↓
Success/Failure Notifications
```

### On Pull Request
```
Push to PR branch
    ↓
Lint & Type Check
    ↓
Build & Test
    ↓
Deploy to Vercel (Preview)
    ↓
Performance Check
    ↓
Comment with preview URL
```

### On Push to Develop
```
Push to develop branch
    ↓
Lint & Type Check
    ↓
Build & Test
    ↓
(No automatic deployment)
```

---

## 🎯 Monitoring Deployments

### View Workflow Runs

1. Go to repository **Actions** tab
2. Click on workflow run
3. View job details and logs

### View Deployment Status

1. Go to repository **Deployments** tab
2. See all deployments and their status
3. Click on deployment for details

### Check Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click on your project
3. View deployment history
4. Check deployment logs

---

## 🔧 Customization

### Change Deployment Trigger

To deploy on push to develop branch:

```yaml
on:
  push:
    branches:
      - main
      - develop  # Add this line
```

### Add Custom Environment Variables

```yaml
env:
  NODE_VERSION: 22.13.0
  PNPM_VERSION: 10.15.1
  CUSTOM_VAR: value  # Add custom variables
```

### Disable Jobs

Comment out jobs you don't need:

```yaml
# performance-check:
#   name: Performance Check
#   ...
```

### Change Concurrency

Modify concurrency settings:

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true  # Cancel in-progress runs
```

---

## 🐛 Troubleshooting

### Workflow Not Triggering

**Problem:** Workflow doesn't run on push

**Solutions:**
1. Verify workflow file is in `.github/workflows/` directory
2. Check workflow file syntax (YAML)
3. Verify branch name matches trigger (main/develop)
4. Check GitHub Actions is enabled in repository settings

### Deployment Fails

**Problem:** Deployment fails in workflow

**Solutions:**
1. Check build logs in workflow run
2. Verify environment variables are set
3. Check Vercel project settings
4. Verify Vercel token is valid
5. Check project ID and org ID are correct

### Secrets Not Found

**Problem:** "Secret not found" error

**Solutions:**
1. Verify secret names match exactly (case-sensitive)
2. Check secrets are in correct repository
3. Verify you have permission to manage secrets
4. Try recreating the secret

### Build Takes Too Long

**Problem:** Build job times out

**Solutions:**
1. Optimize dependencies
2. Remove unused packages
3. Check for large files
4. Increase timeout in workflow

### Preview URL Not Showing

**Problem:** Preview URL not in PR comment

**Solutions:**
1. Check PR comment permissions
2. Verify Vercel deployment succeeded
3. Check workflow logs for errors
4. Verify `GITHUB_TOKEN` has correct permissions

---

## 📝 Environment Variables in Workflow

### Available Variables

```yaml
${{ github.ref }}              # Current branch (refs/heads/main)
${{ github.sha }}              # Current commit SHA
${{ github.actor }}            # User who triggered workflow
${{ github.event_name }}       # Event type (push, pull_request)
${{ github.run_id }}           # Workflow run ID
${{ secrets.VERCEL_TOKEN }}    # Vercel API token
```

### Using Secrets in Steps

```yaml
- name: Deploy
  env:
    VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
    VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
  run: vercel --prod
```

---

## 🔒 Security Best Practices

### 1. **Rotate Tokens Regularly**
- Regenerate Vercel token every 90 days
- Update GitHub secret when token changes

### 2. **Use Environment Protection**
- Require approval for production deployments
- Set deployment environments in workflow

### 3. **Audit Secret Access**
- Review who has access to secrets
- Check GitHub audit logs
- Monitor for suspicious activity

### 4. **Never Commit Secrets**
- Add `.env*` to `.gitignore`
- Use GitHub secrets, not environment files
- Review commits for accidental secrets

### 5. **Limit Token Permissions**
- Create token with minimal required permissions
- Don't use personal access tokens
- Use Vercel's API tokens instead

---

## 📊 Workflow Status Badges

Add status badge to README:

```markdown
[![Deploy to Vercel](https://github.com/jpisa-a11y/time-and-attention-ai/actions/workflows/vercel-deploy.yml/badge.svg)](https://github.com/jpisa-a11y/time-and-attention-ai/actions/workflows/vercel-deploy.yml)
```

---

## 🚀 Advanced Configuration

### Matrix Builds (Multiple Node Versions)

```yaml
strategy:
  matrix:
    node-version: [20.x, 22.x]

steps:
  - uses: actions/setup-node@v4
    with:
      node-version: ${{ matrix.node-version }}
```

### Conditional Deployments

```yaml
if: github.ref == 'refs/heads/main' && github.event_name == 'push'
```

### Scheduled Deployments

```yaml
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sunday
```

### Manual Deployments

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy to'
        required: true
        default: 'preview'
```

---

## 📞 Support Resources

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Vercel GitHub Action:** https://github.com/amondnet/vercel-action
- **Workflow Syntax:** https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
- **Secrets Management:** https://docs.github.com/en/actions/security-guides/encrypted-secrets

---

## ✅ Setup Checklist

Before deploying:

- [ ] Vercel token created and added as `VERCEL_TOKEN` secret
- [ ] Vercel org ID added as `VERCEL_ORG_ID` secret
- [ ] Vercel project ID added as `VERCEL_PROJECT_ID` secret
- [ ] Workflow file added to `.github/workflows/vercel-deploy.yml`
- [ ] Workflow file syntax is valid YAML
- [ ] GitHub Actions is enabled in repository settings
- [ ] Test workflow by pushing to a branch
- [ ] Verify preview deployment on pull request
- [ ] Verify production deployment on main branch
- [ ] Check Vercel dashboard for successful deployments

---

## 📈 Next Steps

1. **Monitor Deployments:** Check Actions tab for workflow runs
2. **Optimize Build:** Reduce build time by optimizing dependencies
3. **Add Notifications:** Set up Slack/Discord notifications
4. **Scale Infrastructure:** Use Vercel's advanced features
5. **Document Process:** Update team documentation

---

**Last Updated:** January 20, 2025  
**Version:** 1.0
