#!/bin/bash

################################################################################
# Time & Attention AI - Vercel Environment Variables Setup Script
# Automates the process of adding environment variables to Vercel
# Version: 1.0
################################################################################

set -e

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
echo -e "${BLUE}Time & Attention AI - Vercel Environment Setup${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    log_info "Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    log_info "Please log in to Vercel..."
    vercel login
fi

# Get project information
log_info "Retrieving Vercel project information..."
PROJECT_ID=$(vercel projects list --json 2>/dev/null | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$PROJECT_ID" ]; then
    log_error "Could not find Vercel project. Please ensure you have a project set up."
    exit 1
fi

log_success "Found project: $PROJECT_ID"

# Function to add environment variable
add_env_var() {
    local name=$1
    local value=$2
    local env=$3
    
    if [ -z "$value" ] || [ "$value" = "your-" ] || [ "$value" = "your-" ]; then
        log_warning "Skipping $name (placeholder value)"
        return
    fi
    
    log_info "Adding $name to $env environment..."
    vercel env add "$name" --value "$value" --environment "$env" 2>/dev/null || true
}

# Prompt for environment selection
echo ""
echo "Which environment would you like to configure?"
echo "1) Production"
echo "2) Preview (Staging)"
echo "3) Development"
echo "4) All environments"
read -p "Enter your choice (1-4): " env_choice

case $env_choice in
    1)
        ENVIRONMENTS=("production")
        ;;
    2)
        ENVIRONMENTS=("preview")
        ;;
    3)
        ENVIRONMENTS=("development")
        ;;
    4)
        ENVIRONMENTS=("production" "preview" "development")
        ;;
    *)
        log_error "Invalid choice"
        exit 1
        ;;
esac

# Configure variables for each environment
for env in "${ENVIRONMENTS[@]}"; do
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}Configuring $env environment${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    
    # Basic configuration
    log_info "Basic Configuration"
    read -p "NODE_ENV (default: production): " NODE_ENV
    NODE_ENV=${NODE_ENV:-production}
    add_env_var "NODE_ENV" "$NODE_ENV" "$env"
    
    read -p "VITE_APP_TITLE (default: Time & Attention): " VITE_APP_TITLE
    VITE_APP_TITLE=${VITE_APP_TITLE:-"Time & Attention"}
    add_env_var "VITE_APP_TITLE" "$VITE_APP_TITLE" "$env"
    
    read -p "VITE_APP_ID (default: time-and-attention-ai): " VITE_APP_ID
    VITE_APP_ID=${VITE_APP_ID:-"time-and-attention-ai"}
    add_env_var "VITE_APP_ID" "$VITE_APP_ID" "$env"
    
    # Analytics
    echo ""
    log_info "Analytics Configuration (Optional)"
    read -p "VITE_ANALYTICS_WEBSITE_ID (leave blank to skip): " VITE_ANALYTICS_WEBSITE_ID
    if [ -n "$VITE_ANALYTICS_WEBSITE_ID" ]; then
        add_env_var "VITE_ANALYTICS_WEBSITE_ID" "$VITE_ANALYTICS_WEBSITE_ID" "$env"
    fi
    
    read -p "VITE_ANALYTICS_ENDPOINT (leave blank to skip): " VITE_ANALYTICS_ENDPOINT
    if [ -n "$VITE_ANALYTICS_ENDPOINT" ]; then
        add_env_var "VITE_ANALYTICS_ENDPOINT" "$VITE_ANALYTICS_ENDPOINT" "$env"
    fi
    
    # API Configuration
    echo ""
    log_info "API Configuration (Optional)"
    read -p "VITE_API_URL (leave blank to skip): " VITE_API_URL
    if [ -n "$VITE_API_URL" ]; then
        add_env_var "VITE_API_URL" "$VITE_API_URL" "$env"
    fi
    
    read -p "VITE_APP_URL (leave blank to skip): " VITE_APP_URL
    if [ -n "$VITE_APP_URL" ]; then
        add_env_var "VITE_APP_URL" "$VITE_APP_URL" "$env"
    fi
    
    # Stripe Configuration
    echo ""
    log_info "Stripe Configuration (Optional)"
    read -p "VITE_STRIPE_PUBLIC_KEY (leave blank to skip): " VITE_STRIPE_PUBLIC_KEY
    if [ -n "$VITE_STRIPE_PUBLIC_KEY" ]; then
        add_env_var "VITE_STRIPE_PUBLIC_KEY" "$VITE_STRIPE_PUBLIC_KEY" "$env"
    fi
    
    # OAuth Configuration
    echo ""
    log_info "OAuth Configuration (Optional)"
    read -p "VITE_OAUTH_PORTAL_URL (leave blank to skip): " VITE_OAUTH_PORTAL_URL
    if [ -n "$VITE_OAUTH_PORTAL_URL" ]; then
        add_env_var "VITE_OAUTH_PORTAL_URL" "$VITE_OAUTH_PORTAL_URL" "$env"
    fi
    
    # Custom Domain
    echo ""
    log_info "Custom Domain Configuration (Optional)"
    read -p "CUSTOM_DOMAIN (leave blank to skip): " CUSTOM_DOMAIN
    if [ -n "$CUSTOM_DOMAIN" ]; then
        add_env_var "CUSTOM_DOMAIN" "$CUSTOM_DOMAIN" "$env"
    fi
done

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
log_success "Environment variables configured successfully!"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Offer to redeploy
echo ""
read -p "Would you like to redeploy now? (y/n): " redeploy
if [ "$redeploy" = "y" ] || [ "$redeploy" = "Y" ]; then
    log_info "Redeploying..."
    vercel --prod
    log_success "Deployment complete!"
else
    log_info "Remember to redeploy for changes to take effect:"
    log_info "  vercel --prod"
fi

echo ""
log_success "Setup complete!"
