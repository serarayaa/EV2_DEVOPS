# Script de inicio rápido para Windows PowerShell
# Ejecutar como: .\scripts\quick-start.ps1

Write-Host "🚀 Depilaciones Debby - Quick Start" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Docker
Write-Host "🔍 Verificando Docker..." -ForegroundColor Yellow
try {
    docker --version | Out-Null
    Write-Host "✅ Docker instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está instalado o no está corriendo" -ForegroundColor Red
    Write-Host "   Instala Docker Desktop desde: https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Verificar Docker Compose
Write-Host "🔍 Verificando Docker Compose..." -ForegroundColor Yellow
try {
    docker-compose --version | Out-Null
    Write-Host "✅ Docker Compose instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Compose no está disponible" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Iniciando servicios..." -ForegroundColor Cyan
Write-Host ""

# Detener servicios previos si existen
Write-Host "🛑 Deteniendo servicios previos..." -ForegroundColor Yellow
docker-compose down 2>$null

# Iniciar servicios
Write-Host "🚀 Iniciando contenedores..." -ForegroundColor Yellow
docker-compose up -d --build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ¡Servicios iniciados exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 URLs de acceso:" -ForegroundColor Cyan
    Write-Host "   Frontend:  http://localhost" -ForegroundColor White
    Write-Host "   Backend:   http://localhost:5000" -ForegroundColor White
    Write-Host "   API Docs:  http://localhost:5000/api/health" -ForegroundColor White
    Write-Host ""
    Write-Host "📊 Ver logs:" -ForegroundColor Cyan
    Write-Host "   docker-compose logs -f" -ForegroundColor White
    Write-Host ""
    Write-Host "🛑 Detener servicios:" -ForegroundColor Cyan
    Write-Host "   docker-compose down" -ForegroundColor White
    Write-Host ""
    
    # Esperar 5 segundos y verificar estado
    Write-Host "⏳ Esperando que los servicios estén listos..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    Write-Host ""
    Write-Host "📋 Estado de los contenedores:" -ForegroundColor Cyan
    docker-compose ps
    
    Write-Host ""
    Write-Host "🎉 ¡Todo listo! Abre tu navegador en http://localhost" -ForegroundColor Green
    
} else {
    Write-Host ""
    Write-Host "❌ Error al iniciar servicios" -ForegroundColor Red
    Write-Host "   Revisa los logs con: docker-compose logs" -ForegroundColor Yellow
    exit 1
}
