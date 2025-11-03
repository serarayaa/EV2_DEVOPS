# Script para limpiar workflow runs antiguos/fallidos de GitHub Actions
# Uso: .\cleanup-actions.ps1 -KeepLast 5

param(
    [string]$Owner = "serarayaa",
    [string]$Repo = "EV2_DEVOPS",
    [int]$KeepLast = 5,
    [switch]$DeleteFailed,
    [switch]$DryRun
)

# Nota: Necesitas un Personal Access Token de GitHub
# Crear en: https://github.com/settings/tokens
# Scopes necesarios: repo, workflow

$token = Read-Host "Ingresa tu GitHub Personal Access Token" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
$tokenPlainText = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

$headers = @{
    "Authorization" = "token $tokenPlainText"
    "Accept" = "application/vnd.github.v3+json"
}

Write-Host "🔍 Obteniendo workflow runs de $Owner/$Repo..." -ForegroundColor Cyan

$url = "https://api.github.com/repos/$Owner/$Repo/actions/runs?per_page=100"
$response = Invoke-RestMethod -Uri $url -Headers $headers -Method Get

$runs = $response.workflow_runs

Write-Host "📊 Total de runs encontrados: $($runs.Count)" -ForegroundColor Yellow

# Filtrar runs a eliminar
$toDelete = @()

if ($DeleteFailed) {
    # Eliminar solo los fallidos
    $toDelete = $runs | Where-Object { $_.conclusion -eq "failure" }
    Write-Host "🔴 Runs fallidos a eliminar: $($toDelete.Count)" -ForegroundColor Red
} else {
    # Mantener los últimos N, eliminar el resto
    $toKeep = $runs | Select-Object -First $KeepLast
    $toDelete = $runs | Select-Object -Skip $KeepLast
    Write-Host "✅ Runs a mantener: $($toKeep.Count)" -ForegroundColor Green
    Write-Host "🗑️  Runs a eliminar: $($toDelete.Count)" -ForegroundColor Yellow
}

if ($toDelete.Count -eq 0) {
    Write-Host "✨ No hay runs para eliminar." -ForegroundColor Green
    exit 0
}

Write-Host "`n📋 Runs que serán eliminados:" -ForegroundColor Cyan
foreach ($run in $toDelete) {
    $status = if ($run.conclusion -eq "success") { "✅" } else { "❌" }
    Write-Host "$status Run #$($run.run_number) - $($run.name) - $($run.conclusion)" -ForegroundColor Gray
}

if ($DryRun) {
    Write-Host "`n🔍 DRY RUN - No se eliminó nada (usa sin -DryRun para eliminar)" -ForegroundColor Yellow
    exit 0
}

$confirm = Read-Host "`n¿Confirmas eliminar estos $($toDelete.Count) runs? (yes/no)"
if ($confirm -ne "yes") {
    Write-Host "❌ Cancelado." -ForegroundColor Red
    exit 1
}

Write-Host "`n🗑️  Eliminando runs..." -ForegroundColor Yellow

$deleted = 0
$errors = 0

foreach ($run in $toDelete) {
    try {
        $deleteUrl = "https://api.github.com/repos/$Owner/$Repo/actions/runs/$($run.id)"
        Invoke-RestMethod -Uri $deleteUrl -Headers $headers -Method Delete
        $deleted++
        Write-Host "✅ Eliminado: Run #$($run.run_number)" -ForegroundColor Green
        Start-Sleep -Milliseconds 500  # Rate limiting
    } catch {
        $errors++
        Write-Host "❌ Error eliminando Run #$($run.run_number): $_" -ForegroundColor Red
    }
}

Write-Host "`n✨ Completado!" -ForegroundColor Green
Write-Host "   Eliminados: $deleted" -ForegroundColor Green
Write-Host "   Errores: $errors" -ForegroundColor Red

# Limpiar token de memoria
$tokenPlainText = $null
[System.GC]::Collect()
