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

init:
	@if [[ ! -f .env ]]; then echo cp .env.dist .env; fi
	@if [[ ! -f .env.dev ]]; then cp .env.dev.dist .env.dev; fi
	@if [[ ! -f .env.prod ]]; then cp .env.prod.dist .env.prod; fi

# Run in development mode (builds dev image and runs nodemon)
dev:
	NODE_ENV=development BUILD_TARGET=$(PROFILE_DEV) $(COMPOSE) \
	-p $(PROJECT_NAME)-$(PROFILE_DEV) \
	--profile $(PROFILE_DEV) --env-file .env --env-file .env.dev \
	-f docker-compose.yml -f docker-compose.dev.yml up \
	--build

# Run in production mode (builds optimized prod image)
prod:
	NODE_ENV=production BUILD_TARGET=$(PROFILE_PROD) $(COMPOSE) \
	-p $(PROJECT_NAME)-$(PROFILE_PROD) \
	--profile $(PROFILE_PROD) --env-file .env --env-file .env.prod \
	-f docker-compose.yml up --build -d

# Stop and remove all project containers of development mode
down-dev:
	$(COMPOSE) -p $(PROJECT_NAME)-$(PROFILE_DEV) down

# Stop and remove all project containers of production mode
down-prod:
	$(COMPOSE) -p $(PROJECT_NAME)-$(PROFILE_PROD) down

# Stop and remove all project containers
down: down-dev down-prod

# Follow container logs in real time
logs:
	$(COMPOSE) logs -f
