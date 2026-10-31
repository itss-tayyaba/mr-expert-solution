# Multi-stage Dockerfile for Coolify & Containerized Production Deployments
# Stage 1: Build Frontend
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build the Vite React frontend with root base for custom .com domains
ENV VITE_BASE_PATH=/
RUN npm run build

# Stage 2: Production Runner
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

COPY package*.json ./
RUN npm ci --omit=dev

# Copy built frontend from builder stage
COPY --from=builder /app/dist ./dist

# Copy backend server and database
COPY server ./server

# Persistent volume for order/leads data
VOLUME ["/app/server/data"]

EXPOSE 5000

CMD ["node", "server/server.js"]
