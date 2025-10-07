#!/bin/sh
set -e

echo "🚀 Starting container in $NODE_ENV mode..."

if [ "$NODE_ENV" = "production" ]; then
  echo "▶️ Running production build"
  npm run start
else
  echo "💻 Running development mode"
  npm run dev
fi
