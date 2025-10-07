# ==============================
# Makefile for Docker management
# ==============================

# Docker Compose command shortcut
COMPOSE=docker compose

# Compose profiles
PROFILE_DEV=dev
PROFILE_PROD=prod

# Docker project name (used to group containers)
PROJECT_NAME=vinipraionfr

# Default target (display help)
.DEFAULT_GOAL := help

# Initialize environment file and install local dependencies
help:
	@echo "Available commands:"
	@echo "  make dev         -> Run Docker in dev mode (live reload)"
	@echo "  make prod        -> Run Docker in production mode"
	@echo "  make down        -> Stop containers"
	@echo "  make logs        -> Show container logs"

# Run in development mode (builds dev image and runs nodemon)
dev:
	NODE_ENV=development BUILD_TARGET=$(PROFILE_DEV) $(COMPOSE) -p $(PROJECT_NAME) --profile $(PROFILE_DEV) up --build

# Run in production mode (builds optimized prod image)
prod:
	NODE_ENV=production BUILD_TARGET=$(PROFILE_PROD) $(COMPOSE) -p $(PROJECT_NAME) --profile $(PROFILE_PROD) up --build -d

# Stop and remove all project containers
down:
	$(COMPOSE) -p $(PROJECT_NAME) down

# Follow container logs in real time
logs:
	$(COMPOSE) logs -f
