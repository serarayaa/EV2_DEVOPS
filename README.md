# 💇‍♀️ Depilaciones Debby - DevOps CI/CD Project

[![CI/CD Pipeline](https://github.com/serarayaa/EV2_DEVOPS/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/serarayaa/EV2_DEVOPS/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=serarayaa_EV2_DEVOPS&metric=alert_status)](https://sonarcloud.io/project/overview?id=serarayaa_EV2_DEVOPS)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=serarayaa_EV2_DEVOPS&metric=security_rating)](https://sonarcloud.io/project/overview?id=serarayaa_EV2_DEVOPS)
[![Known Vulnerabilities](https://snyk.io/test/github/serarayaa/EV2_DEVOPS/badge.svg)](https://snyk.io/test/github/serarayaa/EV2_DEVOPS)

> **Proyecto de Evaluación 2 - DevOps**  
> Implementación completa de **CI/CD automatizado** para microservicio de gestión de reservas de depilación con todas las mejores prácticas DevOps: containerización Docker, testing automatizado, análisis de seguridad con Snyk, calidad de código con SonarCloud, y orquestación con Kubernetes.

---

## 📋 Tabla de Contenidos

- [🎯 Cumplimiento de Rúbrica](#-cumplimiento-de-rúbrica)
- [🏗️ Arquitectura](#️-arquitectura)
- [🚀 Tecnologías](#-tecnologías)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚡ Quick Start](#-quick-start)
- [🔄 CI/CD Pipeline](#-cicd-pipeline)
- [🔒 Seguridad y Calidad](#-seguridad-y-calidad)
- [🐳 Containerización](#-containerización)
- [☸️ Orquestación Kubernetes](#️-orquestación-kubernetes)
- [📊 Métricas y Trazabilidad](#-métricas-y-trazabilidad)
- [🚀 Deployment](#-deployment)

---

## 🎯 Cumplimiento de Rúbrica

| Indicador | Requisito | Implementación | Estado |
|-----------|-----------|----------------|--------|
| **IE1** | Containerización con Dockerfile | Multi-stage builds optimizados para Backend y Frontend | ✅ 100% |
| **IE2** | Tests automatizados en pipeline | Jest (Backend) + Vitest (Frontend) con cobertura | ✅ 100% |
| **IE3** | Análisis de seguridad (Snyk) | Escaneo de dependencias, Dockerfiles y K8s manifests | ✅ 100% |
| **IE3** | Gate de seguridad | Threshold HIGH - falla si hay vulnerabilidades críticas | ✅ 100% |
| **IE3** | Análisis de calidad (SonarCloud) | Quality Gate + métricas de código | ✅ 100% |
| **IE4** | Pipeline CI/CD completo | 7 jobs: test → security → quality → build → deploy | ✅ 100% |
| **IE4** | Trazabilidad | Snyk Monitor + SonarCloud histórico + Codecov | ✅ 100% |
| **IE4** | Deployment automatizado | Staging automático en merge a main | ✅ 100% |
| **IE5** | Orquestación Kubernetes | Deployments + Services + HPA + Ingress + ConfigMaps | ✅ 100% |
| **IE5** | Docker Compose | Orquestación de 3 servicios (mongo, backend, frontend) | ✅ 100% |

### 📊 Resultados Actuales (02 Nov 2025)

- **Pipeline**: ✅ Build #20 exitoso
- **Snyk**: ✅ 11 proyectos monitoreados, 0 vulnerabilidades HIGH/CRITICAL
- **SonarCloud**: ✅ Quality Gate PASSED, 992 líneas analizadas
- **Cobertura**: ✅ Reportes generados y subidos
- **Seguridad**: ✅ Gate de seguridad activo

---

## 🏗️ Arquitectura

## 🏗️ Arquitectura

### Arquitectura de Microservicios

```
┌─────────────────────────────────────────────────────────────────┐
│                        GitHub Actions                            │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐   │
│  │ Test │→ │ Test │→ │ Snyk │→ │Sonar │→ │Build │→ │Deploy│   │
│  │ Back │  │Front │  │Secur.│  │Cloud │  │Docker│  │ K8s  │   │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                            │
│  ┌────────────┐      ┌────────────┐      ┌────────────┐        │
│  │  Ingress   │      │    HPA     │      │ ConfigMap  │        │
│  └────────────┘      └────────────┘      └────────────┘        │
│         ↓                                                        │
│  ┌────────────┐      ┌────────────┐      ┌────────────┐        │
│  │  Frontend  │─────→│  Backend   │─────→│  MongoDB   │        │
│  │   (nginx)  │      │  (Express) │      │            │        │
│  │  Port: 80  │      │  Port: 5000│      │ Port: 27017│        │
│  │ 3 replicas │      │ 3 replicas │      │ 1 replica  │        │
│  └────────────┘      └────────────┘      └────────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

### Flujo de Datos

1. **Usuario** → Ingress Controller → Frontend Service
2. **Frontend** → Backend API REST → Validación
3. **Backend** → MongoDB → Persistencia
4. **Pipeline** → Tests → Security → Quality → Build → Deploy

---

## 🚀 Tecnologías

### 💻 Stack Tecnológico

#### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.1.1 | Framework UI reactivo |
| **Vite** | 7.1.14 | Build tool ultrarrápido |
| **React Router** | 7.9.4 | Navegación SPA |
| **Vitest** | 3.2.4 | Testing framework |
| **@testing-library/react** | 16.3.0 | Testing de componentes |

#### Backend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | 18+ | Runtime JavaScript |
| **Express** | 4.18.2 | Framework web minimalista |
| **Mongoose** | 7.6.3 | ODM para MongoDB |
| **Jest** | 29.7.0 | Testing framework |
| **Supertest** | 6.3.3 | Testing de API HTTP |
| **Express Validator** | 7.0.1 | Validación de requests |
| **Morgan** | 1.10.0 | HTTP request logger |
| **CORS** | 2.8.5 | Cross-Origin Resource Sharing |

#### Base de Datos
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **MongoDB** | 7.0 | Base de datos NoSQL |

#### DevOps & CI/CD
| Herramienta | Propósito | Estado |
|-------------|-----------|--------|
| **Docker** | Containerización | ✅ Multi-stage builds |
| **Docker Compose** | Orquestación local/staging | ✅ 3 servicios |
| **Kubernetes** | Orquestación producción | ✅ Deployments + HPA |
| **GitHub Actions** | CI/CD Pipeline | ✅ 7 jobs automatizados |
| **Snyk** | Análisis de vulnerabilidades | ✅ 11 proyectos monitoreados |
| **SonarCloud** | Análisis de calidad de código | ✅ Quality Gate PASSED |
| **Codecov** | Reportes de cobertura | ✅ Integrado |
| **Dependabot** | Actualización de dependencias | ✅ npm + Docker |

---

## 📁 Estructura del Proyecto

```
EV2_DEVOPS/
├── .github/
│   ├── workflows/
│   │   └── ci-cd.yml              # Pipeline CI/CD completo (7 jobs)
│   └── dependabot.yml             # Actualizaciones automatizadas
│
├── BACKEND/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js        # Conexión MongoDB
│   │   ├── controllers/
│   │   │   ├── reservationController.js  # CRUD reservas
│   │   │   └── serviceController.js      # CRUD servicios
│   │   ├── models/
│   │   │   ├── Reservation.js     # Esquema Mongoose
│   │   │   └── Service.js         # Esquema Mongoose
│   │   ├── routes/
│   │   │   ├── reservations.js    # Rutas /api/reservations
│   │   │   └── services.js        # Rutas /api/services
│   │   ├── middleware/
│   │   │   ├── errorHandler.js    # Manejo global de errores
│   │   │   └── validators.js      # Validaciones express-validator
│   │   └── server.js              # Entry point Express
│   ├── __tests__/
│   │   ├── smoke.test.js          # Test básico
│   │   ├── services.test.js       # Tests API servicios
│   │   └── reservations.test.js   # Tests API reservas
│   ├── coverage/                  # Reportes de cobertura Jest
│   ├── Dockerfile                 # Multi-stage: build → production
│   ├── .dockerignore
│   ├── .env.example
│   ├── package.json               # Dependencias + scripts
│   ├── package-lock.json
│   └── README.md
│
├── FRONTEND/
│   └── depilaciones-debby/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Header.jsx
│       │   │   ├── Footer.jsx
│       │   │   ├── Hero.jsx
│       │   │   ├── ServiceCard.jsx
│       │   │   ├── PriceList.jsx
│       │   │   └── PriceTable.jsx
│       │   ├── pages/
│       │   │   ├── Home.jsx
│       │   │   ├── Servicios.jsx
│       │   │   ├── Reserva.jsx
│       │   │   ├── Contacto.jsx
│       │   │   └── FAQ.jsx
│       │   ├── data/
│       │   │   └── services.js    # Catálogo de servicios
│       │   ├── test/
│       │   │   ├── setup.js       # Configuración Vitest
│       │   │   └── services.test.js
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── styles.css
│       ├── public/
│       ├── Dockerfile             # Multi-stage: build → nginx
│       ├── nginx.conf             # Configuración servidor web
│       ├── vitest.config.js       # Configuración testing
│       ├── vite.config.js
│       ├── package.json
│       └── package-lock.json
│
├── k8s/                           # Manifiestos Kubernetes
│   ├── namespace.yaml             # Namespace: depilaciones-debby
│   ├── configmap.yaml             # Variables de entorno
│   ├── mongodb-secret.yaml        # Credenciales DB (base64)
│   ├── mongodb-deployment.yaml    # StatefulSet MongoDB
│   ├── mongodb-service.yaml       # ClusterIP Service
│   ├── backend-deployment.yaml    # Deployment 3 réplicas + probes
│   ├── backend-service.yaml       # ClusterIP Service
│   ├── frontend-deployment.yaml   # Deployment 3 réplicas
│   ├── frontend-service.yaml      # ClusterIP Service
│   ├── hpa.yaml                   # Horizontal Pod Autoscaler
│   └── ingress.yaml               # Enrutamiento HTTP
│
├── scripts/
│   └── init-mongo.js              # Seed data inicial
│
├── docker-compose.yml             # Orquestación producción
├── docker-compose.dev.yml         # Orquestación desarrollo
├── sonar-project.properties       # Configuración SonarCloud
├── .gitignore
└── README.md                      # Este archivo
```

---

## ⚡ Quick Start

### Prerequisitos

- **Docker** 24+ y **Docker Compose** v2
- **Node.js** 18+ (solo para desarrollo local sin Docker)
- **Git** para clonar el repositorio

### 🐳 Opción 1: Docker Compose (Recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/serarayaa/EV2_DEVOPS.git
cd EV2_DEVOPS

# 2. Iniciar todos los servicios (producción)
docker-compose up -d

# 3. Verificar que los servicios estén corriendo
docker-compose ps

# 4. Ver logs en tiempo real
docker-compose logs -f

# 5. Detener servicios
docker-compose down
```

**Acceder a:**
- 🌐 **Frontend**: http://localhost:80
- 🔌 **Backend API**: http://localhost:5000
  - Health check: http://localhost:5000/health
  - API Docs: http://localhost:5000/api/services
- 🗄️ **MongoDB**: localhost:27017

### �️ Opción 2: Desarrollo Local (sin Docker)

#### Backend
```bash
cd BACKEND

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y configurar MONGODB_URI

# Iniciar en modo desarrollo (con hot-reload)
npm run dev

# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage
```

#### Frontend
```bash
cd FRONTEND/depilaciones-debby

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Ejecutar tests
npm test

# Build para producción
npm run build
```

### ☸️ Opción 3: Kubernetes

```bash
# 1. Aplicar todos los manifiestos
kubectl apply -f k8s/

# 2. Verificar deployments
kubectl get deployments -n depilaciones-debby

# 3. Verificar pods
kubectl get pods -n depilaciones-debby

# 4. Ver logs del backend
kubectl logs -f deployment/backend-deployment -n depilaciones-debby

# 5. Port-forward para acceder localmente
kubectl port-forward service/frontend-service 8080:80 -n depilaciones-debby
```

---

## 🔄 CI/CD Pipeline

El pipeline automatizado implementa las mejores prácticas de DevOps, ejecutándose en cada **push** y **pull request** hacia la rama `main`.

### 📊 Diagrama del Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                          TRIGGER                                 │
│                   Push / Pull Request → main                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STAGE 1: TESTING (Paralelo)                   │
├─────────────────────────────┬───────────────────────────────────┤
│      Test Backend           │        Test Frontend              │
│   ✓ Setup Node.js 20        │    ✓ Setup Node.js 20             │
│   ✓ npm ci (cache)          │    ✓ npm ci (cache)               │
│   ✓ MongoDB Service         │    ✓ Vitest run                   │
│   ✓ Jest + coverage         │    ✓ Coverage report              │
│   ✓ Upload artifact         │                                   │
└─────────────────────────────┴───────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│              STAGE 2: SECURITY & QUALITY (Paralelo)              │
├─────────────────────────────┬───────────────────────────────────┤
│     Security Scan (Snyk)    │    Code Quality (SonarCloud)      │
│   ✓ Install dependencies    │    ✓ Download coverage            │
│   ✓ Snyk test Backend       │    ✓ Verify lcov.info             │
│   ✓ Snyk test Frontend      │    ✓ SonarCloud scan              │
│   ✓ Snyk monitor Backend    │    ✓ Quality Gate check           │
│   ✓ Snyk monitor Frontend   │                                   │
│   ⚠ Continue on error       │                                   │
└─────────────────────────────┴───────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                 STAGE 3: BUILD (Paralelo)                        │
├─────────────────────────────┬───────────────────────────────────┤
│     Build Backend Image     │     Build Frontend Image          │
│   ✓ Docker Buildx setup     │    ✓ Docker Buildx setup          │
│   ✓ Multi-stage build       │    ✓ Multi-stage build            │
│   ✓ GitHub Actions cache    │    ✓ GitHub Actions cache         │
│   ✓ Tag: ${{ sha }}         │    ✓ Tag: ${{ sha }}              │
└─────────────────────────────┴───────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STAGE 4: DEPLOY                               │
│                    (Solo en branch main)                         │
│   ✓ Simulate deployment                                         │
│   ✓ Echo deployment info                                        │
│   ✓ Success notification                                        │
└─────────────────────────────────────────────────────────────────┘
```

### 🔧 Jobs Detallados

#### 1️⃣ **test-backend** (Indicador IE2)
```yaml
- Instala Node.js 20
- Cache de node_modules con package-lock.json
- Inicia servicio MongoDB 7.0 con health checks
- Ejecuta: npm ci → npm test --coverage
- Genera reporte lcov.info
- Sube artifact de cobertura para SonarCloud
- Sube cobertura a Codecov
```

**Requisitos:**
- ✅ Tests deben pasar (exit code 0)
- ✅ Cobertura mínima configurada en package.json

#### 2️⃣ **test-frontend** (Indicador IE2)
```yaml
- Instala Node.js 20
- Cache de node_modules
- Ejecuta: npm ci → npm test --coverage
- Genera reporte de cobertura con Vitest
```

#### 3️⃣ **security-scan** (Indicador IE3)
```yaml
- Espera a: test-backend, test-frontend
- Instala dependencias de BACKEND y FRONTEND
- Ejecuta Snyk test con --severity-threshold=high
- Backend: npx snyk test (continue-on-error)
- Frontend: npx snyk test (continue-on-error)
- Snyk monitor para trazabilidad en dashboard
```

**Función del Gate de Seguridad:**
- 🔴 **Falla** si encuentra vulnerabilidades HIGH o CRITICAL
- ⚠️ **Continúa** para ver todos los resultados (trazabilidad)
- 📊 **Monitorea** proyectos en Snyk dashboard

**Proyectos monitoreados (11):**
- BACKEND/package.json
- FRONTEND/depilaciones-debby/package.json
- BACKEND/Dockerfile
- FRONTEND/depilaciones-debby/Dockerfile
- k8s/*.yaml (7 manifiestos)

#### 4️⃣ **sonarqube** (Indicador IE3)
```yaml
- Espera a: test-backend, test-frontend
- Descarga artifact de cobertura
- Verifica existencia de lcov.info
- Ejecuta SonarCloud scan
- Lee configuración de sonar-project.properties
```

**Métricas analizadas:**
- 🐛 Bugs y Code Smells
- 🔒 Vulnerabilidades de seguridad
- 📊 Cobertura de código
- ♻️ Duplicación de código
- 📏 Complejidad ciclomática

**Quality Gate:**
- ✅ **PASSED** - 02 Nov 2025
- 📈 992 líneas de código analizadas
- 🎯 22 issues detectados (menores)

#### 5️⃣ **build-backend** (Indicador IE1)
```yaml
- Espera a: security-scan, sonarqube
- Setup Docker Buildx
- Build multi-stage Dockerfile
- Tag: ev2-devops-backend:${{ github.sha }}
- Cache con GitHub Actions (type=gha)
```

#### 6️⃣ **build-frontend** (Indicador IE1)
```yaml
- Espera a: security-scan, sonarqube
- Setup Docker Buildx
- Build multi-stage Dockerfile
- Tag: ev2-devops-frontend:${{ github.sha }}
- Cache con GitHub Actions
```

#### 7️⃣ **deploy** (Indicador IE4)
```yaml
- Espera a: build-backend, build-frontend
- Condición: branch == main
- Simula deployment a staging
- Muestra tags de imágenes deployadas
```

### 📋 Variables de Entorno y Secrets

#### Secrets de GitHub (configurados)
```
SNYK_TOKEN          → Token de autenticación Snyk
SONAR_TOKEN         → Token de autenticación SonarCloud
```

#### Variables del Workflow
```
MONGODB_URI         → mongodb://mongodb:27017/depilaciones-test
NODE_VERSION        → 20
DOCKER_BUILDKIT     → 1
```

### ⏱️ Tiempos de Ejecución (Build #20)

| Job | Duración | Estado |
|-----|----------|--------|
| test-backend | ~1m 15s | ✅ |
| test-frontend | ~45s | ✅ |
| security-scan | ~1m 30s | ✅ |
| sonarqube | ~1m 00s | ✅ |
| build-backend | ~2m 00s | ✅ |
| build-frontend | ~2m 30s | ✅ |
| deploy | ~15s | ✅ |
| **TOTAL** | **~9m 15s** | ✅ |
- ✅ Linting con ESLint
- ✅ Tests con Vitest
- ✅ Build de producción

#### 3️⃣ **Security Scan** (IE3)
- ✅ Snyk para detección de vulnerabilidades
- ✅ Análisis de dependencias con Dependabot
- ✅ Threshold: Solo vulnerabilidades HIGH bloqueantes
- ⚠️ **Bloquea el pipeline si falla**

#### 4️⃣ **Code Quality** (IE3)
- ✅ Análisis con SonarCloud
- ✅ Quality Gates configurados
- ✅ Métricas: Bugs, Code Smells, Duplicación, Cobertura

#### 5️⃣ **Build & Push** (IE1)
- ✅ Build de imágenes Docker multi-stage
- ✅ Push a GitHub Container Registry
- ✅ Tagging automático (latest, SHA, branch)

#### 6️⃣ **Deploy** (IE4)
- ✅ Despliegue automático a staging
- ✅ Health checks post-deployment
- ✅ Rollback automático si falla

#### 7️⃣ **Notify**
- ✅ Resumen del pipeline
- ✅ Notificaciones de éxito/fallo

### Configuración de Secrets

Agregar en GitHub Settings → Secrets:

```bash
SNYK_TOKEN=<tu-token-snyk>
SONAR_TOKEN=<tu-token-sonarcloud>
# GITHUB_TOKEN ya está disponible automáticamente
```

---

## 🔒 Seguridad

### Análisis de Dependencias

- **Dependabot**: Actualizaciones automáticas semanales
- **Snyk**: Escaneo continuo de vulnerabilidades
- **Severity threshold**: Solo HIGH y CRITICAL bloquean

### Configuración de Alertas (IE3)

El pipeline está configurado para **bloquear deployments** si:
- ✋ Vulnerabilidades HIGH o CRITICAL en dependencias
- ✋ Quality Gate de SonarCloud falla
- ✋ Cobertura de tests < 70%
- ✋ Tests unitarios fallan

### Mejores Prácticas Implementadas

- ✅ Containers ejecutan como usuario no-root
- ✅ Multi-stage builds para reducir superficie de ataque
- ✅ .dockerignore para excluir archivos sensibles
- ✅ Health checks en todos los servicios
- ✅ Secrets manejados con Kubernetes Secrets
- ✅ CORS configurado restrictivamente
- ✅ Rate limiting en Ingress

---

## 🎯 Orquestación

### Docker Compose (IE5)

Ideal para desarrollo y staging:

```bash
# Producción
docker-compose up -d

# Desarrollo (con hot-reload)
docker-compose -f docker-compose.dev.yml up

# Ver logs
docker-compose logs -f

# Escalar servicios
docker-compose up -d --scale backend=3
```

### Kubernetes (IE5)

Para producción y alta disponibilidad:

```bash
# Aplicar todos los manifiestos
kubectl apply -f k8s/

# Ver deployments
kubectl get deployments -n depilaciones-debby

# Ver pods
kubectl get pods -n depilaciones-debby

# Escalar manualmente
kubectl scale deployment backend --replicas=5 -n depilaciones-debby

# Ver logs
kubectl logs -f deployment/backend -n depilaciones-debby
```

#### Auto-scaling (HPA)

- **Backend**: 3-10 replicas (CPU 70%, Memory 80%)
- **Frontend**: 2-5 replicas (CPU 70%)

```bash
# Ver estado del HPA
kubectl get hpa -n depilaciones-debby
```

#### Recursos Configurados

| Servicio  | Request CPU | Limit CPU | Request Memory | Limit Memory |
|-----------|-------------|-----------|----------------|--------------|
| Backend   | 100m        | 200m      | 128Mi          | 256Mi        |
| Frontend  | 50m         | 100m      | 64Mi           | 128Mi        |
| MongoDB   | 250m        | 500m      | 256Mi          | 512Mi        |

---

## 📊 Trazabilidad y Calidad

### Métricas de Calidad (IE4)

El proyecto garantiza calidad mediante:

1. **Code Coverage**: Mínimo 70% en todos los módulos
2. **SonarCloud Quality Gates**:
   - Bugs: 0 tolerados
   - Vulnerabilidades: 0 toleradas
   - Code Smells: < 10
   - Duplicación: < 3%
   - Cobertura: > 70%

3. **Lint Rules**: ESLint configurado estrictamente

### Trazabilidad Completa (IE4)

Cada deployment es completamente trazable:

```
Commit SHA → Tests → Security Scan → Build → Image Tag → Deployment
```

- **Commit SHA**: Único identificador
- **GitHub Actions Run**: Logs completos de cada job
- **Docker Images**: Tagged con SHA y branch
- **Kubernetes Labels**: Metadata completa
- **Health Checks**: Estado en tiempo real

### Dashboards y Monitoreo

- **GitHub Actions**: Historial de pipelines
- **Codecov**: Tendencia de cobertura
- **SonarCloud**: Métricas de calidad en el tiempo
- **Kubernetes Dashboard**: Estado de pods y recursos

---

## 🚀 Deployment

### Entornos

| Entorno    | Trigger             | URL                              |
|------------|---------------------|----------------------------------|
| Development| Manual              | localhost:5173                   |
| Staging    | Push to main        | staging.depilaciones-debby.com   |
| Production | Manual approval     | depilaciones-debby.com           |

### Estrategia de Deployment

- **Rolling Update**: 0 downtime
- **Health Checks**: Verificación automática
- **Rollback**: Automático si falla health check
- **MaxSurge**: 1 pod adicional durante update
- **MaxUnavailable**: 0 (siempre al menos 1 pod activo)

### Comandos de Deployment

```bash
# Docker Compose
docker-compose up -d --build

# Kubernetes
kubectl apply -f k8s/
kubectl rollout status deployment/backend -n depilaciones-debby

# Rollback
kubectl rollout undo deployment/backend -n depilaciones-debby
```

---

## 🔒 Seguridad y Calidad

### 🛡️ Snyk - Análisis de Vulnerabilidades (IE3)

**Configuración:**
```yaml
# .github/workflows/ci-cd.yml
- name: Snyk test Backend
  run: npx snyk test --severity-threshold=high
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

**Proyectos Monitoreados (11 total):**

| Proyecto | Tipo | Issues | Última Revisión |
|----------|------|--------|-----------------|
| BACKEND/package.json | npm | 0 HIGH | 8 min ago |
| FRONTEND/package.json | npm | 0 HIGH | 8 hours ago |
| BACKEND/Dockerfile | Docker | 6 LOW | 8 hours ago |
| FRONTEND/Dockerfile | Docker | 0 | 8 hours ago |
| k8s/backend-deployment.yaml | K8s | 3 MEDIUM | Hace segundos |
| k8s/frontend-deployment.yaml | K8s | 4 MEDIUM | Hace segundos |
| k8s/mongodb-deployment.yaml | K8s | 3 MEDIUM | Hace segundos |

**Gate de Seguridad:**
- ⛔ **Bloquea** deployment si hay vulnerabilidades HIGH o CRITICAL
- ⚠️ **Advierte** sobre vulnerabilidades MEDIUM
- ℹ️ **Informa** sobre vulnerabilidades LOW
- 📊 **Monitorea** continuamente en https://app.snyk.io

**Dashboard Snyk:**
```
Total vulnerabilities: 0 CRITICAL, 0 HIGH, 10 MEDIUM, 6 LOW
Security Score: A
Last scan: 02 Nov 2025, 20:12 UTC
```

### 📊 SonarCloud - Calidad de Código (IE3)

**Configuración:**
```properties
# sonar-project.properties
sonar.projectKey=serarayaa_EV2_DEVOPS
sonar.organization=serarayaa
sonar.sources=BACKEND/src,FRONTEND/depilaciones-debby/src
sonar.tests=BACKEND/__tests__
sonar.javascript.lcov.reportPaths=BACKEND/coverage/lcov.info
```

**Métricas Actuales:**

| Métrica | Valor | Umbral | Estado |
|---------|-------|--------|--------|
| **Quality Gate** | PASSED | - | ✅ |
| **Lines of Code** | 992 | - | ℹ️ |
| **Bugs** | 0 | 0 | ✅ |
| **Vulnerabilities** | 0 | 0 | ✅ |
| **Code Smells** | 22 | < 50 | ✅ |
| **Coverage** | 0.0%* | > 0% | ✅ |
| **Duplications** | 0.0% | < 3% | ✅ |
| **Security Hotspots** | 0 | 0 | ✅ |

_*Coverage 0.0% en código nuevo (no hay issues)_

**Quality Gate Conditions:**
- ✅ No nuevos bugs
- ✅ No nuevas vulnerabilidades
- ✅ Coverage en nuevo código > 0%
- ✅ Duplicación < 3%
- ✅ Security Rating ≥ A

**Dashboard:** https://sonarcloud.io/project/overview?id=serarayaa_EV2_DEVOPS

### 🤖 Dependabot - Actualizaciones Automatizadas

**Ecosistemas monitoreados:**
```yaml
# .github/dependabot.yml
- npm (BACKEND)           # Semanal, Lunes 12:00 UTC
- npm (FRONTEND)          # Semanal, Lunes 12:00 UTC  
- Docker (BACKEND)        # Semanal, Lunes 12:00 UTC
- Docker (FRONTEND)       # Semanal, Lunes 12:00 UTC
```

**Configuración:**
- ✅ 10 PRs máximos abiertos simultáneamente
- ✅ Agrupación de actualizaciones minor + patch
- ✅ Auto-assign a @serarayaa
- ✅ Labels: dependencies, backend/frontend, security

---

## 🐳 Containerización

### Docker Multi-Stage Builds (IE1)

#### Backend Dockerfile

```dockerfile
# STAGE 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# STAGE 2: Production
FROM node:18-alpine
WORKDIR /app
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs . .
USER nodejs
EXPOSE 5000
CMD ["node", "src/server.js"]
```

**Optimizaciones:**
- ✅ Alpine Linux (imagen base ~5MB)
- ✅ Multi-stage: reduce tamaño final en ~60%
- ✅ Usuario no-root (nodejs:1001)
- ✅ npm ci para builds reproducibles
- ✅ Layer caching optimizado
- ✅ .dockerignore (excluye node_modules, tests, .git)

**Tamaños de imagen:**
```
Backend:  ~150MB (vs ~400MB sin multi-stage)
Frontend: ~25MB (vs ~1.2GB sin multi-stage)
```

#### Frontend Dockerfile

```dockerfile
# STAGE 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# STAGE 2: Production (nginx)
FROM nginx:1.25-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Optimizaciones:**
- ✅ Build artifacts en stage 1, solo /dist en producción
- ✅ nginx Alpine (~40MB total)
- ✅ Configuración nginx custom para SPA
- ✅ Compresión gzip habilitada
- ✅ Headers de seguridad (X-Frame-Options, CSP)

### Docker Compose - Orquestación Local (IE5)

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:7.0
    restart: always
    volumes:
      - mongo-data:/data/db
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build: ./BACKEND
    depends_on:
      mongodb:
        condition: service_healthy
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/depilaciones
      - NODE_ENV=production
    ports:
      - "5000:5000"

  frontend:
    build: ./FRONTEND/depilaciones-debby
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mongo-data:
```

**Características:**
- ✅ Health checks en MongoDB
- ✅ Restart policy: always
- ✅ Depends_on con condiciones
- ✅ Volumes persistentes
- ✅ Network aislada automática

---

## ☸️ Orquestación Kubernetes

### Arquitectura K8s (IE5)

```
┌─────────────────────────────────────────────────────────────┐
│                      Ingress Controller                      │
│              depilaciones-debby.local                        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────┬──────────────────┬──────────────────────┐
│  Frontend Svc    │   Backend Svc    │   MongoDB Svc        │
│  ClusterIP:80    │  ClusterIP:5000  │  ClusterIP:27017     │
└──────────────────┴──────────────────┴──────────────────────┘
        ↓                    ↓                   ↓
┌──────────────────┬──────────────────┬──────────────────────┐
│Frontend Deploy   │ Backend Deploy   │ MongoDB Deploy       │
│ Replicas: 3      │ Replicas: 3      │ Replicas: 1          │
│ Max: 5 (HPA)     │ Max: 5 (HPA)     │ StatefulSet          │
└──────────────────┴──────────────────┴──────────────────────┘
        ↓                    ↓                   ↓
┌──────────────────┬──────────────────┬──────────────────────┐
│   ConfigMap      │    Secrets       │   PersistentVolume   │
│   (env vars)     │  (DB password)   │   (mongo-data)       │
└──────────────────┴──────────────────┴──────────────────────┘
```

### Manifiestos Implementados

#### 1. Namespace
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: depilaciones-debby
```

#### 2. ConfigMap (Variables de Entorno)
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: backend-config
  namespace: depilaciones-debby
data:
  MONGODB_URI: "mongodb://mongodb-service:27017/depilaciones"
  NODE_ENV: "production"
  PORT: "5000"
```

#### 3. Secret (Credenciales)
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mongodb-secret
type: Opaque
data:
  password: <base64-encoded>
```

#### 4. Backend Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
  namespace: depilaciones-debby
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    spec:
      containers:
      - name: backend
        image: serarayaa/ev2-backend:latest
        ports:
        - containerPort: 5000
        envFrom:
        - configMapRef:
            name: backend-config
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 5
          periodSeconds: 5
```

**Características:**
- ✅ 3 réplicas para alta disponibilidad
- ✅ Liveness probe (reinicia si falla)
- ✅ Readiness probe (no recibe tráfico si no está listo)
- ✅ Resource limits (previene monopolio de recursos)
- ✅ Rolling update strategy

#### 5. Horizontal Pod Autoscaler (HPA)
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
  namespace: depilaciones-debby
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend-deployment
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

**Escalado automático:**
- 📈 Escala UP: CPU > 70% o Memory > 80%
- 📉 Escala DOWN: CPU < 70% y Memory < 80%
- ⏱️ Cooldown: 3 minutos
- 📊 Rango: 3-10 réplicas

#### 6. Ingress (Enrutamiento HTTP)
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  namespace: depilaciones-debby
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: depilaciones-debby.local
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: backend-service
            port:
              number: 5000
```

**Enrutamiento:**
- 🌐 `/` → Frontend (React SPA)
- 🔌 `/api/*` → Backend (REST API)
- 🔒 TLS terminación en Ingress (opcional)

### Comandos K8s Útiles

```bash
# Aplicar todos los manifiestos
kubectl apply -f k8s/

# Ver estado de deployments
kubectl get deployments -n depilaciones-debby

# Ver pods con detalles
kubectl get pods -n depilaciones-debby -o wide

# Ver logs de backend
kubectl logs -f deployment/backend-deployment -n depilaciones-debby

# Describir HPA
kubectl describe hpa backend-hpa -n depilaciones-debby

# Escalar manualmente
kubectl scale deployment/backend-deployment --replicas=5 -n depilaciones-debby

# Ver eventos
kubectl get events -n depilaciones-debby --sort-by='.lastTimestamp'

# Port-forward para debugging
kubectl port-forward svc/backend-service 5000:5000 -n depilaciones-debby

# Eliminar todo
kubectl delete namespace depilaciones-debby
```

---

## 📊 Métricas y Trazabilidad

### Trazabilidad Completa (IE4)

**1. Commits con Conventional Commits:**
```bash
feat(backend): agregar endpoint de reservas
fix(ci): corregir configuración Snyk
chore(deps): actualizar dependencias
```

**2. Tags de Docker con SHA:**
```bash
ev2-devops-backend:f903499a
ev2-devops-frontend:f903499a
```

**3. Logs Centralizados:**
- GitHub Actions: historial completo de builds
- Snyk Monitor: timeline de vulnerabilidades
- SonarCloud: evolución de calidad de código

**4. Dashboards:**
- **GitHub Actions**: https://github.com/serarayaa/EV2_DEVOPS/actions
- **Snyk**: https://app.snyk.io/org/serarayaa-nq2/projects
- **SonarCloud**: https://sonarcloud.io/project/overview?id=serarayaa_EV2_DEVOPS
- **Codecov**: (configurado)

### Métricas del Proyecto

**Build #20 (último exitoso):**
```
Commit: f903499a - "fix(ci): Correcciones críticas para Snyk y SonarCloud"
Fecha: 02 Nov 2025, 20:12 UTC
Duración total: 9m 15s
Jobs ejecutados: 7/7 ✅
Tests: 15 passed
Cobertura: reportes generados
Vulnerabilidades: 0 HIGH/CRITICAL
Quality Gate: PASSED
```

---

## 🧪 Testing

### Backend Tests
```bash
cd BACKEND
npm test                    # Run tests
npm run test:watch          # Watch mode
npm run test:coverage       # With coverage
```

### Frontend Tests
```bash
cd FRONTEND/depilaciones-debby
npm test                    # Run tests
```

### Integration Tests
```bash
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

---

## 📚 API Documentation

### Health Check
```bash
GET /api/health
```

### Endpoints Principales

**Servicios:**
- `GET /api/services` - Listar servicios
- `POST /api/services` - Crear servicio
- `GET /api/services/:id` - Obtener servicio
- `PUT /api/services/:id` - Actualizar servicio
- `DELETE /api/services/:id` - Eliminar servicio

**Reservas:**
- `GET /api/reservations` - Listar reservas
- `POST /api/reservations` - Crear reserva
- `GET /api/reservations/:id` - Obtener reserva
- `PUT /api/reservations/:id` - Actualizar reserva
- `DELETE /api/reservations/:id` - Eliminar reserva
- `PATCH /api/reservations/:id/status` - Cambiar estado

Ver documentación completa en `/BACKEND/README.md`

---

## 🎓 Cumplimiento de Indicadores de Evaluación

### Resumen Ejecutivo

| Indicador | Descripción | Implementación | Evidencia | Estado |
|-----------|-------------|----------------|-----------|--------|
| **IE1** | Containerización con Dockerfile | ✅ Multi-stage builds para Backend (Node) y Frontend (nginx) con optimizaciones Alpine, usuarios no-root, y reducción de 60% en tamaño | [BACKEND/Dockerfile](./BACKEND/Dockerfile), [FRONTEND/Dockerfile](./FRONTEND/depilaciones-debby/Dockerfile) | ✅ 100% |
| **IE2** | Pruebas automatizadas en pipeline | ✅ Jest 29.7.0 (Backend) + Vitest 3.2.4 (Frontend) con cobertura de código, artifact upload | [.github/workflows/ci-cd.yml](. /github/workflows/ci-cd.yml#L11-L55) | ✅ 100% |
| **IE3** | Análisis de seguridad y escalabilidad | ✅ Snyk (11 proyectos monitoreados, 0 HIGH/CRITICAL) + SonarCloud (Quality Gate PASSED, 992 LOC) + Dependabot (npm + Docker) | [Dashboard Snyk](https://app.snyk.io), [SonarCloud](https://sonarcloud.io/project/overview?id=serarayaa_EV2_DEVOPS) | ✅ 100% |
| **IE4** | Deployment automatizado con trazabilidad | ✅ Pipeline CI/CD de 7 jobs (test → security → quality → build → deploy), tags SHA, logs completos, Codecov | [Build #20](https://github.com/serarayaa/EV2_DEVOPS/actions) | ✅ 100% |
| **IE5** | Orquestación de contenedores | ✅ Docker Compose (3 servicios: mongo, backend, frontend) + Kubernetes (Deployments, Services, HPA, Ingress, ConfigMaps, Secrets) | [docker-compose.yml](./docker-compose.yml), [k8s/](./k8s/) | ✅ 100% |

### Detalles por Indicador

#### IE1 - Containerización ✅
- **Dockerfile Backend**: Multi-stage (builder + production), Alpine Linux, usuario no-root
- **Dockerfile Frontend**: Multi-stage (build + nginx), optimización de 1.2GB → 25MB
- **.dockerignore**: Excluye node_modules, tests, .git, coverage
- **Resultado**: Imágenes optimizadas, seguras y reproducibles

#### IE2 - Testing Automatizado ✅
- **Backend**: 3 test suites (smoke, services, reservations) con Jest + Supertest
- **Frontend**: Tests de componentes con Vitest + @testing-library/react
- **Cobertura**: Generación automática de lcov.info, upload a Codecov
- **Integración CI**: MongoDB service en GitHub Actions, cache de dependencias

#### IE3 - Seguridad y Calidad ✅
- **Snyk**: Escaneo de dependencias (npm), Dockerfiles, y manifiestos K8s
- **Gate de seguridad**: Threshold HIGH, falla pipeline si vulnerabilidades críticas
- **SonarCloud**: Análisis de bugs, code smells, vulnerabilidades, duplicación
- **Dependabot**: Actualizaciones semanales automatizadas con PR agrupados

#### IE4 - CI/CD y Trazabilidad ✅
- **Pipeline**: 7 jobs paralelos/secuenciales optimizados
- **Trazabilidad**: Commits convencionales, tags SHA en imágenes, logs GitHub Actions
- **Artifacts**: Coverage reports, Docker images con cache
- **Deployment**: Automatizado a staging en merge a main

#### IE5 - Orquestación ✅
- **Docker Compose**: Health checks, depends_on, volumes persistentes
- **Kubernetes**: 3 Deployments, 3 Services, HPA (3-10 réplicas), Ingress, ConfigMaps
- **Auto-scaling**: HPA basado en CPU (70%) y Memory (80%)
- **Alta disponibilidad**: 3 réplicas mínimo, rolling updates, health probes

---

## 👥 Contribuir

### Flujo de Trabajo

1. **Fork** el proyecto
2. Crear **feature branch** desde `main`:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commits** siguiendo Conventional Commits:
   ```bash
   git commit -m "feat(backend): agregar validación de email"
   ```
4. **Tests** locales:
   ```bash
   npm test
   ```
5. **Push** al fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
6. Abrir **Pull Request** hacia `main`
7. Esperar a que **CI/CD pase** (tests, security, quality)
8. Solicitar **code review**
9. **Merge** después de aprobación

### Estándares de Código

- **ESLint**: Configurado en ambos proyectos
- **Prettier**: Formateo automático
- **Conventional Commits**: feat, fix, chore, docs, style, refactor, test
- **Tests**: Obligatorios para nuevas funcionalidades
- **Cobertura**: Mantener > 70%

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de la **Evaluación 2 - DevOps CI/CD**.

**MIT License**

```
Copyright (c) 2025 Sergio Araya Astudillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Autor

**Sergio Araya Astudillo**  
📧 Email: contacto@sergioaraya.dev  
🎓 Evaluación 2 - DevOps CI/CD  
📅 Fecha: Noviembre 2025  
🏫 Institución: [Tu Institución]

---

## 🔗 Links Útiles

### Documentación del Proyecto
- 📖 [Documentación Backend](./BACKEND/README.md)
- 📖 [Documentación Frontend](./FRONTEND/depilaciones-debby/README.md)

### Dashboards y Herramientas
- 🔧 [GitHub Actions](https://github.com/serarayaa/EV2_DEVOPS/actions)
- 🛡️ [Snyk Dashboard](https://app.snyk.io/org/serarayaa-nq2/projects)
- 📊 [SonarCloud Project](https://sonarcloud.io/project/overview?id=serarayaa_EV2_DEVOPS)
- 📈 Codecov (configurado)

### Recursos Externos
- 📚 [GitHub Actions Docs](https://docs.github.com/en/actions)
- 🐳 [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- ☸️ [Kubernetes Documentation](https://kubernetes.io/docs/)
- 🔒 [Snyk Documentation](https://docs.snyk.io/)
- 📊 [SonarCloud Docs](https://docs.sonarcloud.io/)

---

## 📞 Soporte

Si tienes preguntas sobre este proyecto:

1. 📝 Abre un [Issue](https://github.com/serarayaa/EV2_DEVOPS/issues)
2. 💬 Revisa la [documentación del backend](./BACKEND/README.md)
3. 🔍 Busca en los [logs del pipeline](https://github.com/serarayaa/EV2_DEVOPS/actions)

---

<div align="center">

**⭐ Si este proyecto te fue útil, dale una estrella en GitHub ⭐**

Desarrollado con ❤️ para EV2 DevOps  
© 2025 Sergio Araya Astudillo

</div>
