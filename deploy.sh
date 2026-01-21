#!/bin/bash

################################################################################
# Time & Attention AI - Main Deployment Script
# Supports: Local, Manus, Vercel, Netlify, Railway, Docker
# Version: 1.0
# Usage: ./deploy.sh [environment] [platform]
################################################################################

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="time-and-attention-ai"
REPO_URL="https://github.com/jpisa-a11y/time-and-attention-ai.git"
NODE_VERSION="22.13.0"
PNPM_VERSION="10.15.1"

# Default values
ENVIRONMENT="${1:-production}"
PLATFORM="${2:-local}"
VERBOSE="${VERBOSE:-false}"

################################################################################
# Helper Functions
################################################################################

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_section() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

check_command() {
    if ! command -v $1 &> /dev/null; then
        log_error "$1 is not installed"
        return 1
    fi
    return 0
}

print_usage() {
    cat << EOF
${BLUE}Time & Attention AI - Deployment Script${NC}

${YELLOW}Usage:${NC}
    ./deploy.sh [environment] [platform]

${YELLOW}Arguments:${NC}
    environment    : production, staging, development (default: production)
    platform       : local, manus, vercel, netlify, railway, docker (default: local)

${YELLOW}Examples:${NC}
    ./deploy.sh production local        # Deploy locally for production
    ./deploy.sh production vercel       # Deploy to Vercel
    ./deploy.sh staging netlify         # Deploy to Netlify staging
    ./deploy.sh development local       # Deploy locally for development

${YELLOW}Environment Variables:${NC}
    VERBOSE=true                        # Enable verbose output
    SKIP_TESTS=true                     # Skip running tests
    SKIP_BUILD=true                     # Skip building
    CUSTOM_DOMAIN=example.com           # Set custom domain

${YELLOW}Supported Platforms:${NC}
    local          : Local development/production server
    manus          : Manus hosting (built-in)
    vercel         : Vercel deployment
    netlify        : Netlify deployment
    railway        : Railway deployment
    docker         : Docker containerization

EOF
}

################################################################################
# Pre-deployment Checks
################################################################################

check_prerequisites() {
    log_section "Checking Prerequisites"
    
    local missing_tools=0
    
    # Check required tools
    for tool in git node npm; do
        if check_command $tool; then
            local version=$($tool --version 2>/dev/null || echo "unknown")
            log_info "$tool: $version"
        else
            log_error "$tool not found"
            missing_tools=$((missing_tools + 1))
        fi
    done
    
    # Check pnpm
    if check_command pnpm; then
        log_info "pnpm: $(pnpm --version)"
    else
        log_warning "pnpm not found, installing globally..."
        npm install -g pnpm@$PNPM_VERSION
    fi
    
    if [ $missing_tools -gt 0 ]; then
        log_error "Missing $missing_tools required tools"
        return 1
    fi
    
    log_success "All prerequisites met"
    return 0
}

check_environment() {
    log_section "Checking Environment Configuration"
    
    # Check for .env file
    if [ ! -f ".env" ] && [ ! -f ".env.${ENVIRONMENT}" ]; then
        log_warning "No .env file found for $ENVIRONMENT environment"
        log_info "Creating .env file with default values..."
        create_env_file
    else
        log_success "Environment file found"
    fi
    
    # Validate environment
    case $ENVIRONMENT in
        production|staging|development)
            log_success "Environment: $ENVIRONMENT"
            ;;
        *)
            log_error "Invalid environment: $ENVIRONMENT"
            return 1
            ;;
    esac
    
    return 0
}

create_env_file() {
    cat > .env.${ENVIRONMENT} << EOF
# Time & Attention AI - ${ENVIRONMENT} Environment
NODE_ENV=${ENVIRONMENT}
VITE_APP_TITLE=Time & Attention
VITE_APP_LOGO=/logo.png
VITE_ANALYTICS_WEBSITE_ID=your-analytics-id
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com

# For production deployment
VITE_API_URL=https://api.example.com
VITE_APP_URL=https://app.example.com

# Optional: Custom domain
CUSTOM_DOMAIN=
EOF
    log_success "Created .env.${ENVIRONMENT}"
}

################################################################################
# Build Process
################################################################################

install_dependencies() {
    log_section "Installing Dependencies"
    
    if [ "$SKIP_BUILD" = "true" ]; then
        log_warning "Skipping dependency installation (SKIP_BUILD=true)"
        return 0
    fi
    
    log_info "Installing dependencies with pnpm..."
    pnpm install --frozen-lockfile
    
    if [ $? -eq 0 ]; then
        log_success "Dependencies installed"
        return 0
    else
        log_error "Failed to install dependencies"
        return 1
    fi
}

run_tests() {
    log_section "Running Tests"
    
    if [ "$SKIP_TESTS" = "true" ]; then
        log_warning "Skipping tests (SKIP_TESTS=true)"
        return 0
    fi
    
    if [ ! -f "package.json" ] || ! grep -q '"test"' package.json; then
        log_warning "No test script found in package.json"
        return 0
    fi
    
    log_info "Running tests..."
    pnpm test
    
    if [ $? -eq 0 ]; then
        log_success "Tests passed"
        return 0
    else
        log_error "Tests failed"
        return 1
    fi
}

build_application() {
    log_section "Building Application"
    
    if [ "$SKIP_BUILD" = "true" ]; then
        log_warning "Skipping build (SKIP_BUILD=true)"
        return 0
    fi
    
    log_info "Building for $ENVIRONMENT environment..."
    NODE_ENV=$ENVIRONMENT pnpm build
    
    if [ $? -eq 0 ]; then
        log_success "Build completed successfully"
        
        # Check build output
        if [ -d "dist" ]; then
            local size=$(du -sh dist | cut -f1)
            log_info "Build output size: $size"
        fi
        
        return 0
    else
        log_error "Build failed"
        return 1
    fi
}

################################################################################
# Platform-Specific Deployment
################################################################################

deploy_local() {
    log_section "Deploying Locally"
    
    log_info "Starting local server..."
    
    case $ENVIRONMENT in
        production)
            log_info "Running production server on port 3000..."
            pnpm start
            ;;
        development)
            log_info "Running development server on port 5173..."
            pnpm dev
            ;;
        staging)
            log_info "Running staging server on port 3000..."
            NODE_ENV=staging pnpm start
            ;;
    esac
}

deploy_vercel() {
    log_section "Deploying to Vercel"
    
    # Check if Vercel CLI is installed
    if ! check_command vercel; then
        log_info "Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    log_info "Deploying to Vercel..."
    
    local vercel_args=""
    
    if [ "$ENVIRONMENT" = "production" ]; then
        vercel_args="--prod"
    fi
    
    vercel $vercel_args --confirm
    
    if [ $? -eq 0 ]; then
        log_success "Deployed to Vercel"
        return 0
    else
        log_error "Vercel deployment failed"
        return 1
    fi
}

deploy_netlify() {
    log_section "Deploying to Netlify"
    
    # Check if Netlify CLI is installed
    if ! check_command netlify; then
        log_info "Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    log_info "Deploying to Netlify..."
    
    local netlify_args="--dir=dist"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        netlify_args="$netlify_args --prod"
    fi
    
    netlify deploy $netlify_args
    
    if [ $? -eq 0 ]; then
        log_success "Deployed to Netlify"
        return 0
    else
        log_error "Netlify deployment failed"
        return 1
    fi
}

deploy_railway() {
    log_section "Deploying to Railway"
    
    # Check if Railway CLI is installed
    if ! check_command railway; then
        log_info "Installing Railway CLI..."
        npm install -g @railway/cli
    fi
    
    log_info "Deploying to Railway..."
    
    railway up
    
    if [ $? -eq 0 ]; then
        log_success "Deployed to Railway"
        return 0
    else
        log_error "Railway deployment failed"
        return 1
    fi
}

deploy_docker() {
    log_section "Deploying with Docker"
    
    # Check if Docker is installed
    if ! check_command docker; then
        log_error "Docker is not installed"
        return 1
    fi
    
    log_info "Building Docker image..."
    
    local image_name="$PROJECT_NAME:$ENVIRONMENT"
    
    docker build -t $image_name \
        --build-arg NODE_ENV=$ENVIRONMENT \
        -f Dockerfile .
    
    if [ $? -ne 0 ]; then
        log_error "Docker build failed"
        return 1
    fi
    
    log_success "Docker image built: $image_name"
    
    log_info "Running Docker container..."
    docker run -d -p 3000:3000 \
        --name $PROJECT_NAME-$ENVIRONMENT \
        -e NODE_ENV=$ENVIRONMENT \
        $image_name
    
    if [ $? -eq 0 ]; then
        log_success "Docker container running"
        log_info "Access at: http://localhost:3000"
        return 0
    else
        log_error "Docker container failed to start"
        return 1
    fi
}

deploy_manus() {
    log_section "Deploying to Manus"
    
    log_info "Manus deployment is handled through the web UI"
    log_info "Steps:"
    log_info "1. Create a checkpoint using webdev_save_checkpoint"
    log_info "2. Click the 'Publish' button in the Management UI"
    log_info "3. Configure custom domain in Settings > Domains"
    
    log_success "Ready for Manus deployment"
    return 0
}

################################################################################
# Post-Deployment
################################################################################

run_health_check() {
    log_section "Running Health Checks"
    
    local max_attempts=30
    local attempt=1
    local health_check_url="http://localhost:3000"
    
    log_info "Checking if application is healthy..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s $health_check_url > /dev/null; then
            log_success "Application is healthy"
            return 0
        fi
        
        log_info "Attempt $attempt/$max_attempts: Waiting for application to start..."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    log_error "Application health check failed after $max_attempts attempts"
    return 1
}

generate_deployment_report() {
    log_section "Deployment Report"
    
    cat > deployment-report.txt << EOF
Time & Attention AI - Deployment Report
Generated: $(date)

Environment: $ENVIRONMENT
Platform: $PLATFORM
Project: $PROJECT_NAME

Build Information:
- Node Version: $(node --version)
- npm Version: $(npm --version)
- pnpm Version: $(pnpm --version)

Build Output:
- Build Directory: dist
- Build Size: $(du -sh dist 2>/dev/null | cut -f1 || echo "N/A")

Deployment Status: SUCCESS

Next Steps:
1. Verify application is running
2. Test all pages and functionality
3. Monitor logs for errors
4. Set up monitoring and alerts
5. Configure domain and SSL

For more information, see DEPLOYMENT.md
EOF
    
    log_success "Deployment report generated: deployment-report.txt"
}

################################################################################
# Main Execution
################################################################################

main() {
    log_section "Time & Attention AI - Deployment Script"
    
    log_info "Configuration:"
    log_info "  Environment: $ENVIRONMENT"
    log_info "  Platform: $PLATFORM"
    log_info "  Project: $PROJECT_NAME"
    echo ""
    
    # Run checks
    check_prerequisites || exit 1
    check_environment || exit 1
    
    # Build
    install_dependencies || exit 1
    run_tests || exit 1
    build_application || exit 1
    
    # Deploy
    case $PLATFORM in
        local)
            deploy_local
            ;;
        vercel)
            deploy_vercel || exit 1
            ;;
        netlify)
            deploy_netlify || exit 1
            ;;
        railway)
            deploy_railway || exit 1
            ;;
        docker)
            deploy_docker || exit 1
            run_health_check
            ;;
        manus)
            deploy_manus
            ;;
        *)
            log_error "Unknown platform: $PLATFORM"
            print_usage
            exit 1
            ;;
    esac
    
    # Post-deployment
    if [ "$PLATFORM" != "local" ]; then
        generate_deployment_report
    fi
    
    log_section "Deployment Complete"
    log_success "Application deployed successfully!"
}

# Show help if requested
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    print_usage
    exit 0
fi

# Run main function
main
