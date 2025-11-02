# 📘 Guía de Configuración GitHub

Esta guía te llevará paso a paso para configurar GitHub y ejecutar el pipeline CI/CD.

---

## 📝 Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com
2. Click en el botón **"New repository"** (botón verde)
3. Configuración:
   - **Repository name**: `depilaciones-debby`
   - **Description**: "Microservicio DevOps con CI/CD completo"
   - **Visibility**: Public (para usar SonarCloud gratuito)
   - ⚠️ **NO** marcar "Initialize this repository with a README"
   - ⚠️ **NO** agregar .gitignore ni license (ya los tienes)
4. Click en **"Create repository"**

---

## 🔄 Paso 2: Subir el Código

Abre PowerShell en la raíz del proyecto (`c:\EV2 DEVOPS`) y ejecuta:

```powershell
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "feat: implementación completa de microservicio DevOps con CI/CD"

# Renombrar branch a main
git branch -M main

# Agregar el remote (REEMPLAZA 'TU-USUARIO' con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/depilaciones-debby.git

# Subir el código
git push -u origin main
```

**Si Git te pide credenciales:**
- Usuario: Tu usuario de GitHub
- Password: Usa un **Personal Access Token** (no tu contraseña)
  - Genera uno en: Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Permisos necesarios: `repo`, `workflow`

---

## 🔐 Paso 3: Configurar Secrets

### 3.1 Obtener SNYK_TOKEN

1. Ve a https://snyk.io
2. Regístrate o inicia sesión (puedes usar tu cuenta de GitHub)
3. Click en tu nombre (arriba a la derecha) → **Account Settings**
4. En el menú izquierdo, click en **General**
5. Busca la sección **Auth Token** o **API Token**
6. Click en **Show** y copia el token
7. ⚠️ Guárdalo temporalmente, lo usarás en el siguiente paso

### 3.2 Obtener SONAR_TOKEN

1. Ve a https://sonarcloud.io
2. Regístrate o inicia sesión con tu cuenta de GitHub
3. Click en **"+"** (arriba a la derecha) → **Analyze new project**
4. Autoriza SonarCloud a acceder a tus repositorios
5. Selecciona el repositorio `depilaciones-debby`
6. Click en **Set Up**
7. Selecciona **"With GitHub Actions"**
8. SonarCloud te mostrará un token, cópialo
9. En la misma página, busca tu **Organization Key** y cópiala también

### 3.3 Agregar Secrets en GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (del repositorio)
3. En el menú izquierdo, click en **Secrets and variables** → **Actions**
4. Click en **"New repository secret"**

Agrega estos 2 secrets:

**Secret 1:**
- Name: `SNYK_TOKEN`
- Value: Pega el token de Snyk
- Click en **"Add secret"**

**Secret 2:**
- Name: `SONAR_TOKEN`
- Value: Pega el token de SonarCloud
- Click en **"Add secret"**

---

## ⚙️ Paso 4: Actualizar Configuraciones

### 4.1 Actualizar archivo sonar-project.properties

Edita el archivo `sonar-project.properties` en la raíz del proyecto:

```properties
sonar.projectKey=TU-USUARIO_depilaciones-debby
sonar.organization=TU-USUARIO

# No cambiar estas líneas
sonar.sources=BACKEND/src,FRONTEND/depilaciones-debby/src
sonar.tests=BACKEND/__tests__
sonar.exclusions=**/node_modules/**,**/dist/**,**/coverage/**,**/*.test.js
sonar.javascript.lcov.reportPaths=BACKEND/coverage/lcov.info
sonar.qualitygate.wait=true
sonar.language=js
sonar.sourceEncoding=UTF-8
```

Reemplaza:
- `TU-USUARIO` con tu usuario de GitHub

### 4.2 Actualizar archivos Kubernetes (opcional)

Solo si planeas desplegar en producción real, edita estos archivos:

**k8s/backend-deployment.yaml** (línea 21):
```yaml
image: ghcr.io/TU-USUARIO/depilaciones-debby-backend:latest
```

**k8s/frontend-deployment.yaml** (línea 21):
```yaml
image: ghcr.io/TU-USUARIO/depilaciones-debby-frontend:latest
```

### 4.3 Actualizar Dependabot

Edita `.github/dependabot.yml` (líneas 11 y 25):
```yaml
reviewers:
  - "TU-USUARIO"
```

### 4.4 Hacer commit de los cambios

```powershell
git add .
git commit -m "chore: actualizar configuración con datos del usuario"
git push
```

---

## ✅ Paso 5: Verificar el Pipeline

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **"Actions"**
3. Deberías ver el workflow **"CI/CD Pipeline"** ejecutándose
4. Click en el workflow para ver el progreso en tiempo real

### Estados posibles:

- 🟡 **Amarillo (In Progress)**: El pipeline está ejecutándose
- 🟢 **Verde (Success)**: Todo pasó correctamente
- 🔴 **Rojo (Failure)**: Algo falló, click para ver los detalles

### Solución de problemas comunes:

**Si falla "Security Scan":**
- Verifica que el `SNYK_TOKEN` esté correctamente configurado
- El token debe tener permisos para escanear

**Si falla "Code Quality":**
- Verifica que el `SONAR_TOKEN` esté correctamente configurado
- Verifica que `sonar-project.properties` tenga tu organización correcta

**Si falla "Build and Push":**
- Solo se ejecuta en el branch `main`
- Necesitas tener permisos para escribir en GitHub Packages

---

## 📊 Paso 6: Habilitar Dependabot

Dependabot ya está configurado, pero asegúrate de que esté activo:

1. Ve a **Settings** → **Code security and analysis**
2. Habilita:
   - ✅ **Dependabot alerts**
   - ✅ **Dependabot security updates**
   - ✅ **Dependabot version updates**

---

## 🎯 Paso 7: Verificar Badges

Una vez que el pipeline se ejecute exitosamente, los badges en el README.md mostrarán el estado:

- [![CI/CD Pipeline](badge-verde)] - Pipeline pasando
- [![codecov](badge-porcentaje)] - Cobertura de código
- [![SonarCloud](badge-quality)] - Calidad de código

---

## 📝 Paso 8: Configurar Branch Protection (Opcional pero recomendado)

Para un flujo profesional:

1. Ve a **Settings** → **Branches**
2. Click en **"Add rule"**
3. Branch name pattern: `main`
4. Marca estas opciones:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - En "Status checks", selecciona:
     - `test-backend`
     - `test-frontend`
     - `security-scan`
     - `code-quality`
5. Click en **"Create"**

Esto garantiza que nadie pueda pushear a `main` si los tests fallan.

---

## 🚀 Workflow Sugerido

### Para nuevas features:

```powershell
# 1. Crear branch de feature
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios y commits
git add .
git commit -m "feat: agregar nueva funcionalidad"

# 3. Pushear el branch
git push origin feature/nueva-funcionalidad

# 4. Crear Pull Request en GitHub
# El pipeline se ejecutará automáticamente

# 5. Si todo pasa, hacer merge a main
```

### Para hotfixes:

```powershell
git checkout -b hotfix/correccion-critica
# hacer cambios
git commit -m "fix: corregir error crítico"
git push origin hotfix/correccion-critica
# crear PR y mergear
```

---

## 📚 Recursos Útiles

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Snyk Docs**: https://docs.snyk.io
- **SonarCloud Docs**: https://docs.sonarcloud.io
- **Dependabot Docs**: https://docs.github.com/en/code-security/dependabot

---

## ✅ Checklist Final

Antes de dar por terminada la configuración, verifica:

- [ ] Repositorio creado en GitHub
- [ ] Código subido correctamente
- [ ] `SNYK_TOKEN` configurado en Secrets
- [ ] `SONAR_TOKEN` configurado en Secrets
- [ ] `sonar-project.properties` actualizado con tu usuario
- [ ] Pipeline ejecutado al menos una vez
- [ ] Todos los jobs del pipeline pasaron (verde)
- [ ] Dependabot habilitado
- [ ] Badges mostrando estado correcto

---

## 🎉 ¡Listo!

Tu proyecto DevOps está completamente configurado y funcionando. El pipeline se ejecutará automáticamente en cada push y pull request.

Para probar localmente:
```powershell
.\scripts\quick-start.ps1    # Iniciar servicios
.\scripts\run-tests.ps1      # Ejecutar tests
.\scripts\cleanup.ps1        # Limpiar todo
```

**¡Éxito con tu evaluación!** 🚀
