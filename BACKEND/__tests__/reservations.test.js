import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/server.js';
import Reservation from '../src/models/Reservation.js';
import Service from '../src/models/Service.js';

describe('Reservation API Tests', () => {
  let serviceId;
  let reservationId;

  beforeAll(async () => {
    // Conectar a base de datos de test
    await mongoose.connect('mongodb://localhost:27017/depilaciones-test');
    
    // Crear un servicio de prueba
    const service = await Service.create({
      name: 'Test Service',
      price: 5000,
      duration: 30,
      category: 'cera'
    });
    serviceId = service._id;
  });

  afterAll(async () => {
    // Limpiar y cerrar conexión
    await Reservation.deleteMany({});
    await Service.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Reservation.deleteMany({});
  });

  describe('GET /api/health', () => {
    it('debería retornar status OK', async () => {
      const res = await request(app).get('/api/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('OK');
    });
  });

  describe('POST /api/reservations', () => {
    it('debería crear una nueva reserva', async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);

      const reservationData = {
        clientName: 'Ana García',
        clientEmail: 'ana@example.com',
        clientPhone: '987654321',
        serviceId: serviceId.toString(),
        date: futureDate.toISOString(),
        time: '14:30',
        notes: 'Primera vez'
      };

      const res = await request(app)
        .post('/api/reservations')
        .send(reservationData);

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.clientName).toBe('Ana García');
      expect(res.body.data.status).toBe('pending');
      
      reservationId = res.body.data._id;
    });

    it('debería fallar con datos inválidos', async () => {
      const invalidData = {
        clientName: 'An', // muy corto
        clientEmail: 'invalid-email',
        clientPhone: '123'
      };

      const res = await request(app)
        .post('/api/reservations')
        .send(invalidData);

      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('debería rechazar fecha pasada', async () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);

      const reservationData = {
        clientName: 'Test User',
        clientEmail: 'test@example.com',
        clientPhone: '987654321',
        serviceId: serviceId.toString(),
        date: pastDate.toISOString(),
        time: '14:30'
      };

      const res = await request(app)
        .post('/api/reservations')
        .send(reservationData);

      expect(res.statusCode).toBe(400);
    });
  });

  describe('GET /api/reservations', () => {
    beforeEach(async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);

      await Reservation.create({
        clientName: 'Test User 1',
        clientEmail: 'test1@example.com',
        clientPhone: '987654321',
        serviceId,
        serviceName: 'Test Service',
        date: futureDate,
        time: '10:00',
        status: 'pending'
      });

      await Reservation.create({
        clientName: 'Test User 2',
        clientEmail: 'test2@example.com',
        clientPhone: '987654322',
        serviceId,
        serviceName: 'Test Service',
        date: futureDate,
        time: '11:00',
        status: 'confirmed'
      });
    });

    it('debería obtener todas las reservas', async () => {
      const res = await request(app).get('/api/reservations');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(2);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('debería filtrar por status', async () => {
      const res = await request(app).get('/api/reservations?status=confirmed');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.count).toBe(1);
      expect(res.body.data[0].status).toBe('confirmed');
    });
  });

  describe('PATCH /api/reservations/:id/status', () => {
    it('debería actualizar el status de una reserva', async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);

      const reservation = await Reservation.create({
        clientName: 'Test User',
        clientEmail: 'test@example.com',
        clientPhone: '987654321',
        serviceId,
        serviceName: 'Test Service',
        date: futureDate,
        time: '10:00',
        status: 'pending'
      });

      const res = await request(app)
        .patch(`/api/reservations/${reservation._id}/status`)
        .send({ status: 'confirmed' });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.status).toBe('confirmed');
    });
  });
});
