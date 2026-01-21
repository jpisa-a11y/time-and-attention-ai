#!/bin/bash

################################################################################
# Time & Attention AI - Netlify Deployment Script
# Deploys the React application to Netlify
# Version: 1.0
################################################################################

set -e

PROJECT_NAME="time-and-attention-ai"
NETLIFY_SITE_ID="${NETLIFY_SITE_ID:-}"
NETLIFY_AUTH_TOKEN="${NETLIFY_AUTH_TOKEN:-}"

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
echo -e "${BLUE}Time & Attention AI - Netlify Deployment${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    log_info "Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Create netlify.toml if it doesn't exist
if [ ! -f "netlify.toml" ]; then
    log_info "Creating netlify.toml configuration..."
    cat > netlify.toml << 'EOF'
[build]
  command = "pnpm build"
  functions = "netlify/functions"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22.13.0"
  PNPM_VERSION = "10.15.1"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
EOF
    log_success "Created netlify.toml"
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

# Deploy to Netlify
log_info "Deploying to Netlify..."

if [ "$1" = "prod" ] || [ "$1" = "production" ]; then
    log_info "Deploying to production..."
    netlify deploy --prod --dir=dist
else
    log_info "Deploying to preview..."
    netlify deploy --dir=dist
fi

if [ $? -eq 0 ]; then
    log_success "Successfully deployed to Netlify"
    log_info "Your application is now live!"
else
    log_error "Netlify deployment failed"
    exit 1
fi
