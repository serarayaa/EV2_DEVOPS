#!/bin/bash

# Script para ejecutar tests localmente antes de commit
# Uso: ./scripts/run-tests.sh

set -e

echo "🧪 Ejecutando tests del proyecto..."
echo ""

# Backend Tests
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 BACKEND TESTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cd BACKEND

if [ ! -d "node_modules" ]; then
  echo "📥 Instalando dependencias del backend..."
  npm install
fi

echo "🧪 Ejecutando tests..."
npm test -- --coverage

echo ""
echo "✅ Backend tests completados!"
echo ""

# Frontend Tests
cd ../FRONTEND/depilaciones-debby
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎨 FRONTEND TESTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ ! -d "node_modules" ]; then
  echo "📥 Instalando dependencias del frontend..."
  npm install
fi

echo "🔍 Ejecutando lint..."
npm run lint

echo "🧪 Ejecutando tests..."
npm test -- --run

echo ""
echo "✅ Frontend tests completados!"
echo ""

cd ../..

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ TODOS LOS TESTS PASARON EXITOSAMENTE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
