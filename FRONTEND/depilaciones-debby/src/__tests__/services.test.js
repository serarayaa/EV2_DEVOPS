import { describe, it, expect } from 'vitest';
import { services } from '../data/services';

describe('Services Data', () => {
  it('should have services defined', () => {
    expect(services).toBeDefined();
    expect(Array.isArray(services)).toBe(true);
  });

  it('should have at least one service', () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it('each service should have required properties', () => {
    services.forEach(service => {
      expect(service).toHaveProperty('name');
      expect(service).toHaveProperty('price');
      expect(typeof service.name).toBe('string');
      expect(typeof service.price).toBe('number');
    });
  });

  it('service prices should be positive numbers', () => {
    services.forEach(service => {
      expect(service.price).toBeGreaterThan(0);
    });
  });

  it('should have correct number of services', () => {
    expect(services.length).toBe(7);
  });
});
