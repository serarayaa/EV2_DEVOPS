# Script para ejecutar tests en Windows PowerShell
# Ejecutar como: .\scripts\run-tests.ps1

Write-Host "🧪 Ejecutando Tests del Proyecto" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$originalPath = Get-Location

# Backend Tests
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Magenta
Write-Host "📦 BACKEND TESTS" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Magenta
Write-Host ""

Set-Location ".\BACKEND"

if (-not (Test-Path ".\node_modules")) {
    Write-Host "📥 Instalando dependencias del backend..." -ForegroundColor Yellow
    npm install
}

Write-Host "🧪 Ejecutando tests..." -ForegroundColor Yellow
npm test -- --coverage

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Backend tests completados!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Backend tests fallaron!" -ForegroundColor Red
    Set-Location $originalPath
    exit 1
}

Write-Host ""

# Frontend Tests
Set-Location $originalPath
Set-Location ".\FRONTEND\depilaciones-debby"

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Magenta
Write-Host "🎨 FRONTEND TESTS" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Magenta
Write-Host ""

if (-not (Test-Path ".\node_modules")) {
    Write-Host "📥 Instalando dependencias del frontend..." -ForegroundColor Yellow
    npm install
}

Write-Host "🔍 Ejecutando lint..." -ForegroundColor Yellow
npm run lint

Write-Host ""
Write-Host "🧪 Ejecutando tests..." -ForegroundColor Yellow
npm test -- --run

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Frontend tests completados!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Frontend tests fallaron!" -ForegroundColor Red
    Set-Location $originalPath
    exit 1
}

Set-Location $originalPath

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Magenta
Write-Host "✅ TODOS LOS TESTS PASARON EXITOSAMENTE" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Magenta
Write-Host ""
