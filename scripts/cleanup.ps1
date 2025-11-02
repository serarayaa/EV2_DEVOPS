# Script de limpieza para Windows PowerShell
# Ejecutar como: .\scripts\cleanup.ps1

Write-Host "🧹 Limpiando Recursos Docker" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Detener contenedores
Write-Host "🛑 Deteniendo contenedores..." -ForegroundColor Yellow
docker-compose down

# Remover volúmenes
Write-Host "🗑️ Removiendo volúmenes..." -ForegroundColor Yellow
docker-compose down -v

# Limpiar imágenes sin usar
Write-Host "🧹 Limpiando imágenes sin usar..." -ForegroundColor Yellow
docker image prune -f

# Limpiar volúmenes sin usar
Write-Host "🧹 Limpiando volúmenes sin usar..." -ForegroundColor Yellow
docker volume prune -f

# Limpiar redes sin usar
Write-Host "🧹 Limpiando redes sin usar..." -ForegroundColor Yellow
docker network prune -f

Write-Host ""
Write-Host "✅ Limpieza completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Estado actual de Docker:" -ForegroundColor Cyan
docker system df
