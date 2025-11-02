# Depilaciones Debby - Backend API

Microservicio REST para la gestión de reservas de servicios de depilación.

## 🚀 Tecnologías

- **Node.js** v18+
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Jest** - Testing framework
- **ESLint** - Linting

## 📋 Requisitos previos

- Node.js 18 o superior
- MongoDB 6.0 o superior
- npm o yarn

## 🔧 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` con tus configuraciones:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/depilaciones-debby
CORS_ORIGIN=http://localhost:5173
```

3. Iniciar MongoDB localmente o usar MongoDB Atlas

## 🏃 Ejecutar el proyecto

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## 🧪 Tests

### Ejecutar todos los tests
```bash
npm test
```

### Tests en modo watch
```bash
npm run test:watch
```

### Cobertura de código
```bash
npm run test:coverage
```

## 📚 API Endpoints

### Health Check
- `GET /api/health` - Verificar estado del servidor

### Servicios
- `GET /api/services` - Obtener todos los servicios
- `GET /api/services/:id` - Obtener un servicio por ID
- `POST /api/services` - Crear nuevo servicio
- `PUT /api/services/:id` - Actualizar servicio
- `DELETE /api/services/:id` - Eliminar servicio

### Reservas
- `GET /api/reservations` - Obtener todas las reservas
- `GET /api/reservations/:id` - Obtener una reserva por ID
- `POST /api/reservations` - Crear nueva reserva
- `PUT /api/reservations/:id` - Actualizar reserva
- `DELETE /api/reservations/:id` - Eliminar reserva
- `PATCH /api/reservations/:id/status` - Actualizar estado de reserva

## 📦 Estructura del proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── reservationController.js
│   │   └── serviceController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validators.js
│   ├── models/
│   │   ├── Reservation.js
│   │   └── Service.js
│   ├── routes/
│   │   ├── reservations.js
│   │   └── services.js
│   └── server.js
├── __tests__/
│   ├── reservations.test.js
│   └── services.test.js
├── .env.example
├── .gitignore
├── jest.config.js
└── package.json
```

## 🔒 Validaciones

El API incluye validaciones robustas para:
- Email válido
- Teléfono (8-12 dígitos)
- Fechas futuras para reservas
- Formato de hora (HH:MM)
- Precios no negativos
- Límites de caracteres en campos de texto

## 🎯 Cobertura de tests

Se requiere mínimo 70% de cobertura en:
- Branches
- Functions
- Lines
- Statements

## 📝 Licencia

MIT
