#!/bin/bash

# Script de limpieza de recursos Docker
# Uso: ./scripts/cleanup.sh

echo "🧹 Limpiando recursos Docker..."

# Detener todos los contenedores
echo "🛑 Deteniendo contenedores..."
docker-compose down

# Remover volúmenes
echo "🗑️ Removiendo volúmenes..."
docker-compose down -v

# Limpiar imágenes sin usar
echo "🧹 Limpiando imágenes sin usar..."
docker image prune -f

# Limpiar volúmenes sin usar
echo "🧹 Limpiando volúmenes sin usar..."
docker volume prune -f

# Limpiar redes sin usar
echo "🧹 Limpiando redes sin usar..."
docker network prune -f

echo "✅ Limpieza completada!"
