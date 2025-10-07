# =========
# BASE STAGE (common to all builds)
# =========
FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

# =========
# DEVELOPMENT IMAGE
# =========
FROM base AS dev
ENV NODE_ENV=development

# =========
# PRODUCTION IMAGE
# =========
FROM base AS prod
ENV NODE_ENV=production

# Remove devDependencies to keep the image lightweight
RUN npm prune --production
