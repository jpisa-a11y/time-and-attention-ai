# Time & Attention AI - Multi-stage Docker Build
# Production-ready Docker image with optimizations

################################################################################
# Stage 1: Builder
################################################################################
FROM node:22.13.0-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.15.1

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build arguments
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Build application
RUN pnpm build

################################################################################
# Stage 2: Runtime
################################################################################
FROM node:22.13.0-alpine

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.15.1

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Copy built application from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
