import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/server.js';
import Service from '../src/models/Service.js';

describe('Service API Tests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/depilaciones-test');
  });

  afterAll(async () => {
    await Service.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Service.deleteMany({});
  });

  describe('POST /api/services', () => {
    it('debería crear un nuevo servicio', async () => {
      const serviceData = {
        name: 'Piernas completas',
        description: 'Depilación de piernas completas con cera',
        price: 6000,
        duration: 45,
        category: 'cera'
      };

      const res = await request(app)
        .post('/api/services')
        .send(serviceData);

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('Piernas completas');
      expect(res.body.data.price).toBe(6000);
    });

    it('debería fallar con precio negativo', async () => {
      const invalidData = {
        name: 'Test Service',
        price: -100
      };

      const res = await request(app)
        .post('/api/services')
        .send(invalidData);

      expect(res.statusCode).toBe(400);
    });

    it('debería fallar con nombre duplicado', async () => {
      const serviceData = {
        name: 'Único Servicio',
        price: 5000
      };

      // Crear el primer servicio
      await request(app).post('/api/services').send(serviceData);

      // Intentar crear duplicado
      const res = await request(app)
        .post('/api/services')
        .send(serviceData);

      expect(res.statusCode).toBe(409);
    });
  });

  describe('GET /api/services', () => {
    beforeEach(async () => {
      await Service.create([
        { name: 'Service 1', price: 4000, category: 'cera', active: true },
        { name: 'Service 2', price: 5000, category: 'laser', active: true },
        { name: 'Service 3', price: 6000, category: 'cera', active: false }
      ]);
    });

    it('debería obtener todos los servicios', async () => {
      const res = await request(app).get('/api/services');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(3);
    });

    it('debería filtrar servicios activos', async () => {
      const res = await request(app).get('/api/services?active=true');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.count).toBe(2);
    });

    it('debería filtrar por categoría', async () => {
      const res = await request(app).get('/api/services?category=cera');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.count).toBe(2);
    });
  });

  describe('PUT /api/services/:id', () => {
    it('debería actualizar un servicio', async () => {
      const service = await Service.create({
        name: 'Service Original',
        price: 5000
      });

      const res = await request(app)
        .put(`/api/services/${service._id}`)
        .send({ name: 'Service Actualizado', price: 6000 });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('Service Actualizado');
      expect(res.body.data.price).toBe(6000);
    });
  });

  describe('DELETE /api/services/:id', () => {
    it('debería eliminar un servicio', async () => {
      const service = await Service.create({
        name: 'Service to Delete',
        price: 5000
      });

      const res = await request(app)
        .delete(`/api/services/${service._id}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);

      // Verificar que fue eliminado
      const found = await Service.findById(service._id);
      expect(found).toBeNull();
    });

    it('debería retornar 404 si el servicio no existe', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      const res = await request(app).delete(`/api/services/${fakeId}`);

      expect(res.statusCode).toBe(404);
    });
  });
});
