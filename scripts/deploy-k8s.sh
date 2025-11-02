#!/bin/bash

# Script de deployment para Kubernetes
# Uso: ./scripts/deploy-k8s.sh [environment]

set -e

ENVIRONMENT=${1:-staging}
NAMESPACE="depilaciones-debby"

echo "🚀 Iniciando deployment a $ENVIRONMENT..."

# Aplicar namespace
echo "📦 Creando namespace..."
kubectl apply -f k8s/namespace.yaml

# Aplicar ConfigMaps y Secrets
echo "🔐 Aplicando configuraciones..."
kubectl apply -f k8s/configmap.yaml

# Aplicar MongoDB
echo "🗄️ Desplegando MongoDB..."
kubectl apply -f k8s/mongodb-deployment.yaml

# Esperar a que MongoDB esté listo
echo "⏳ Esperando MongoDB..."
kubectl wait --for=condition=ready pod -l app=mongodb -n $NAMESPACE --timeout=120s

# Aplicar Backend
echo "⚙️ Desplegando Backend..."
kubectl apply -f k8s/backend-deployment.yaml

# Esperar a que Backend esté listo
echo "⏳ Esperando Backend..."
kubectl wait --for=condition=ready pod -l app=backend -n $NAMESPACE --timeout=120s

# Aplicar Frontend
echo "🎨 Desplegando Frontend..."
kubectl apply -f k8s/frontend-deployment.yaml

# Aplicar HPA
echo "📊 Configurando auto-scaling..."
kubectl apply -f k8s/hpa.yaml

# Aplicar Ingress
echo "🌐 Configurando Ingress..."
kubectl apply -f k8s/ingress.yaml

echo "✅ Deployment completado!"
echo ""
echo "📋 Estado de los servicios:"
kubectl get all -n $NAMESPACE

echo ""
echo "🌐 URLs:"
kubectl get ingress -n $NAMESPACE
