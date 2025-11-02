# 🚀 Comandos de Referencia Rápida

Guía rápida de comandos más usados en el proyecto.

---

## 📦 Scripts PowerShell (Windows)

```powershell
# Inicio rápido de todo el proyecto
.\scripts\quick-start.ps1

# Ejecutar todos los tests
.\scripts\run-tests.ps1

# Limpiar todo
.\scripts\cleanup.ps1
```

---

## 🐳 Docker Compose

### Comandos básicos
```powershell
# Iniciar todos los servicios
docker-compose up -d

# Iniciar con rebuild
docker-compose up -d --build

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb

# Ver estado de servicios
docker-compose ps

# Detener servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v

# Reiniciar un servicio específico
docker-compose restart backend
```

### Escalar servicios
```powershell
# Escalar backend a 3 instancias
docker-compose up -d --scale backend=3

# Ver todas las instancias
docker-compose ps
```

### Ejecutar comandos dentro de contenedores
```powershell
# Acceder a la shell del backend
docker-compose exec backend sh

# Ejecutar tests dentro del contenedor
docker-compose exec backend npm test

# Ver variables de entorno
docker-compose exec backend env
```

---

## 🐋 Docker (imágenes y contenedores)

### Gestión de imágenes
```powershell
# Listar imágenes
docker images

# Construir imagen manualmente
docker build -t depilaciones-backend ./BACKEND
docker build -t depilaciones-frontend ./FRONTEND/depilaciones-debby

# Eliminar imagen
docker rmi depilaciones-backend

# Limpiar imágenes sin usar
docker image prune -f

# Limpiar TODO (cuidado!)
docker system prune -a
```

### Gestión de contenedores
```powershell
# Listar contenedores activos
docker ps

# Listar todos los contenedores
docker ps -a

# Detener contenedor
docker stop depilaciones-backend

# Eliminar contenedor
docker rm depilaciones-backend

# Ver logs de un contenedor
docker logs -f depilaciones-backend

# Inspeccionar contenedor
docker inspect depilaciones-backend
```

### Volúmenes
```powershell
# Listar volúmenes
docker volume ls

# Eliminar volumen
docker volume rm depilaciones-mongodb-data

# Limpiar volúmenes sin usar
docker volume prune -f
```

---

## ☸️ Kubernetes

### Aplicar manifiestos
```powershell
# Aplicar un archivo
kubectl apply -f k8s/namespace.yaml

# Aplicar todo el directorio
kubectl apply -f k8s/

# Aplicar con namespace específico
kubectl apply -f k8s/backend-deployment.yaml -n depilaciones-debby
```

### Ver recursos
```powershell
# Listar todos los recursos
kubectl get all -n depilaciones-debby

# Listar pods
kubectl get pods -n depilaciones-debby

# Listar deployments
kubectl get deployments -n depilaciones-debby

# Listar services
kubectl get services -n depilaciones-debby

# Listar HPA
kubectl get hpa -n depilaciones-debby

# Ver detalles de un pod
kubectl describe pod <pod-name> -n depilaciones-debby
```

### Logs
```powershell
# Ver logs de un deployment
kubectl logs -f deployment/backend -n depilaciones-debby

# Ver logs de un pod específico
kubectl logs -f <pod-name> -n depilaciones-debby

# Ver logs de todos los pods de un deployment
kubectl logs -f -l app=backend -n depilaciones-debby
```

### Escalar
```powershell
# Escalar manualmente
kubectl scale deployment backend --replicas=5 -n depilaciones-debby

# Ver estado del escalado
kubectl get hpa -n depilaciones-debby
```

### Debugging
```powershell
# Ejecutar comando en un pod
kubectl exec -it <pod-name> -n depilaciones-debby -- sh

# Port forward para acceder localmente
kubectl port-forward deployment/backend 5000:5000 -n depilaciones-debby
kubectl port-forward deployment/frontend 8080:80 -n depilaciones-debby

# Ver eventos
kubectl get events -n depilaciones-debby
```

### Rollback
```powershell
# Ver historial de rollout
kubectl rollout history deployment/backend -n depilaciones-debby

# Rollback a la versión anterior
kubectl rollout undo deployment/backend -n depilaciones-debby

# Rollback a una revisión específica
kubectl rollout undo deployment/backend --to-revision=2 -n depilaciones-debby

# Ver estado de rollout
kubectl rollout status deployment/backend -n depilaciones-debby
```

### Limpiar
```powershell
# Eliminar todos los recursos
kubectl delete -f k8s/

# Eliminar namespace (elimina todo dentro)
kubectl delete namespace depilaciones-debby
```

---

## 📝 NPM (Desarrollo)

### Backend
```powershell
cd BACKEND

# Instalar dependencias
npm install

# Desarrollo (con hot-reload)
npm run dev

# Producción
npm start

# Tests
npm test                    # Una vez
npm run test:watch          # Modo watch
npm run test:coverage       # Con cobertura

# Linting
npm run lint
```

### Frontend
```powershell
cd FRONTEND/depilaciones-debby

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview

# Tests
npm test

# Linting
npm run lint
```

---

## 🔍 Git

### Comandos básicos
```powershell
# Ver estado
git status

# Ver cambios
git diff

# Ver historial
git log --oneline

# Ver branches
git branch -a
```

### Workflow
```powershell
# Crear feature branch
git checkout -b feature/nueva-funcionalidad

# Agregar cambios
git add .
git add archivo.js

# Commit
git commit -m "feat: agregar nueva funcionalidad"

# Push
git push origin feature/nueva-funcionalidad

# Cambiar a main
git checkout main

# Traer cambios
git pull origin main

# Mergear branch
git merge feature/nueva-funcionalidad
```

### Deshacer cambios
```powershell
# Deshacer cambios no staged
git checkout -- archivo.js

# Deshacer cambios staged
git reset HEAD archivo.js

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (eliminar cambios)
git reset --hard HEAD~1
```

---

## 🧪 Testing

### Ejecutar tests específicos
```powershell
# Backend - test específico
cd BACKEND
npm test -- reservations.test.js

# Backend - solo un test
npm test -- -t "debería crear una nueva reserva"

# Frontend - test específico
cd FRONTEND/depilaciones-debby
npm test -- App.test.jsx
```

### Ver cobertura
```powershell
# Backend
cd BACKEND
npm run test:coverage
# Abrir: coverage/lcov-report/index.html

# Frontend
cd FRONTEND/depilaciones-debby
npm test -- --coverage
```

---

## 🔒 Seguridad

### Snyk (local)
```powershell
# Instalar Snyk CLI
npm install -g snyk

# Login
snyk auth

# Test backend
cd BACKEND
snyk test

# Test frontend
cd FRONTEND/depilaciones-debby
snyk test

# Monitor proyecto
snyk monitor
```

### Auditoría NPM
```powershell
# Ver vulnerabilidades
npm audit

# Intentar arreglar automáticamente
npm audit fix

# Forzar arreglos (puede romper cosas)
npm audit fix --force
```

---

## 📊 Monitoreo

### Health checks
```powershell
# Backend health
curl http://localhost:5000/api/health

# O en PowerShell
Invoke-WebRequest http://localhost:5000/api/health

# Frontend
curl http://localhost

# MongoDB (requiere mongosh instalado)
mongosh --eval "db.adminCommand('ping')"
```

### Docker stats
```powershell
# Ver uso de recursos en tiempo real
docker stats

# Solo contenedores del proyecto
docker stats depilaciones-backend depilaciones-frontend depilaciones-mongodb
```

---

## 🚨 Troubleshooting

### Limpiar todo y empezar de cero
```powershell
# 1. Detener todo
docker-compose down -v

# 2. Limpiar Docker
docker system prune -a --volumes

# 3. Eliminar node_modules
Remove-Item -Recurse -Force .\BACKEND\node_modules
Remove-Item -Recurse -Force .\FRONTEND\depilaciones-debby\node_modules

# 4. Reinstalar
cd BACKEND
npm install
cd ../FRONTEND/depilaciones-debby
npm install
cd ../..

# 5. Reiniciar
docker-compose up -d --build
```

### Ver recursos de Docker
```powershell
# Espacio usado
docker system df

# Detalles
docker system df -v
```

### Reiniciar Docker Desktop
```powershell
# Detener servicios
Stop-Service -Name "com.docker.service"

# Iniciar servicios
Start-Service -Name "com.docker.service"
```

---

## 📚 API Testing

### Con curl (o PowerShell)
```powershell
# GET servicios
curl http://localhost:5000/api/services

# POST crear servicio
curl -X POST http://localhost:5000/api/services `
  -H "Content-Type: application/json" `
  -d '{"name":"Test","price":5000}'

# GET reservas
curl http://localhost:5000/api/reservations

# POST crear reserva
curl -X POST http://localhost:5000/api/reservations `
  -H "Content-Type: application/json" `
  -d '{"clientName":"Juan Perez","clientEmail":"juan@example.com","clientPhone":"987654321","serviceId":"...","date":"2025-12-01","time":"14:00"}'
```

### Con PowerShell (alternativa)
```powershell
# GET
Invoke-RestMethod -Uri http://localhost:5000/api/services

# POST
$body = @{
    name = "Nuevo Servicio"
    price = 5000
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:5000/api/services `
  -Method Post `
  -Body $body `
  -ContentType "application/json"
```

---

## 🎯 Atajos Útiles

### Ver todo de un vistazo
```powershell
# Estado completo del sistema
Write-Host "=== DOCKER CONTAINERS ==="
docker-compose ps

Write-Host "`n=== DOCKER STATS ==="
docker stats --no-stream

Write-Host "`n=== IMAGES ==="
docker images

Write-Host "`n=== VOLUMES ==="
docker volume ls
```

### Backup de base de datos
```powershell
# Exportar MongoDB
docker-compose exec -T mongodb mongodump --archive > backup.archive

# Importar
docker-compose exec -T mongodb mongorestore --archive < backup.archive
```

---

**💡 Tip**: Guarda este archivo en tu escritorio o márcalo para acceso rápido!
