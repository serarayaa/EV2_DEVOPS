#!/bin/bash

# Script para build local de imágenes Docker
# Uso: ./scripts/build-images.sh [tag]

set -e

TAG=${1:-latest}
REGISTRY="ghcr.io/username"

echo "🐳 Construyendo imágenes Docker..."
echo "Tag: $TAG"
echo ""

# Build Backend
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚙️ Building Backend..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker build -t $REGISTRY/depilaciones-debby-backend:$TAG ./BACKEND
echo "✅ Backend image built: $REGISTRY/depilaciones-debby-backend:$TAG"
echo ""

# Build Frontend
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎨 Building Frontend..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker build -t $REGISTRY/depilaciones-debby-frontend:$TAG ./FRONTEND/depilaciones-debby
echo "✅ Frontend image built: $REGISTRY/depilaciones-debby-frontend:$TAG"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Todas las imágenes construidas exitosamente!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Para pushear al registry:"
echo "  docker push $REGISTRY/depilaciones-debby-backend:$TAG"
echo "  docker push $REGISTRY/depilaciones-debby-frontend:$TAG"
