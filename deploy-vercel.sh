#!/bin/bash

################################################################################
# Time & Attention AI - Vercel Deployment Script
# Deploys the React application to Vercel with optimizations
# Version: 1.0
################################################################################

set -e

PROJECT_NAME="time-and-attention-ai"
VERCEL_ORG_ID="${VERCEL_ORG_ID:-}"
VERCEL_PROJECT_ID="${VERCEL_PROJECT_ID:-}"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Time & Attention AI - Vercel Deployment${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    log_info "Installing Vercel CLI..."
    npm install -g vercel
fi

# Create vercel.json if it doesn't exist
if [ ! -f "vercel.json" ]; then
    log_info "Creating vercel.json configuration..."
    cat > vercel.json << 'EOF'
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "vite",
  "outputDirectory": "dist",
  "env": {
    "NODE_ENV": "production",
    "VITE_APP_TITLE": "@Time & Attention",
    "VITE_APP_LOGO": "@/logo.png"
  },
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/",
      "permanent": true
    }
  ]
}
EOF
    log_success "Created vercel.json"
fi

# Install dependencies
log_info "Installing dependencies..."
pnpm install --frozen-lockfile

# Build application
log_info "Building application..."
NODE_ENV=production pnpm build

if [ ! -d "dist" ]; then
    log_error "Build failed - dist directory not found"
    exit 1
fi

log_success "Build completed"

# Deploy to Vercel
log_info "Deploying to Vercel..."

if [ "$1" = "prod" ] || [ "$1" = "production" ]; then
    log_info "Deploying to production..."
    vercel --prod --confirm
else
    log_info "Deploying to preview..."
    vercel --confirm
fi

if [ $? -eq 0 ]; then
    log_success "Successfully deployed to Vercel"
    log_info "Your application is now live!"
else
    log_error "Vercel deployment failed"
    exit 1
fi
