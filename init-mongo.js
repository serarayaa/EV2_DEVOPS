// Script de inicialización de MongoDB
db = db.getSiblingDB('depilaciones-debby');

// Crear colección de servicios con datos iniciales
db.services.insertMany([
  {
    name: 'Rostro completo',
    description: 'Depilación completa del rostro',
    price: 5000,
    duration: 30,
    category: 'cera',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Axilas',
    description: 'Depilación de axilas',
    price: 4000,
    duration: 20,
    category: 'cera',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Brazos',
    description: 'Depilación de brazos completos',
    price: 5000,
    duration: 35,
    category: 'cera',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Piernas completas',
    description: 'Depilación de piernas completas',
    price: 6000,
    duration: 45,
    category: 'cera',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Full rebaje',
    description: 'Paquete completo de depilación',
    price: 12500,
    duration: 90,
    category: 'combo',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Abdomen',
    description: 'Depilación de abdomen',
    price: 5000,
    duration: 30,
    category: 'cera',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Glúteos',
    description: 'Depilación de glúteos',
    price: 5000,
    duration: 30,
    category: 'cera',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Crear índices
db.services.createIndex({ name: 1 }, { unique: true });
db.services.createIndex({ category: 1 });
db.services.createIndex({ active: 1 });

db.reservations.createIndex({ date: 1, time: 1 });
db.reservations.createIndex({ clientEmail: 1 });
db.reservations.createIndex({ status: 1 });

print('✅ Base de datos inicializada con servicios predeterminados');
