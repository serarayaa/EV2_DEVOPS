import { body, validationResult } from 'express-validator';

// Validaciones para reservas
export const validateReservation = [
  body('clientName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener al menos 3 caracteres'),
  
  body('clientEmail')
    .trim()
    .isEmail()
    .withMessage('Email inválido'),
  
  body('clientPhone')
    .trim()
    .matches(/^[0-9]{8,12}$/)
    .withMessage('Teléfono inválido (8-12 dígitos)'),
  
  body('serviceId')
    .notEmpty()
    .withMessage('El servicio es requerido'),
  
  body('date')
    .isISO8601()
    .withMessage('Fecha inválida')
    .custom((value) => {
      if (new Date(value) <= new Date()) {
        throw new Error('La fecha debe ser futura');
      }
      return true;
    }),
  
  body('time')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Formato de hora inválido (HH:MM)'),
  
  body('notes')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Las notas no pueden exceder 500 caracteres'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];

// Validaciones para servicios
export const validateService = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre del servicio es requerido'),
  
  body('price')
    .isFloat({ min: 0 })
    .withMessage('El precio debe ser un número positivo'),
  
  body('duration')
    .optional()
    .isInt({ min: 15 })
    .withMessage('La duración mínima es 15 minutos'),
  
  body('category')
    .optional()
    .isIn(['cera', 'laser', 'combo'])
    .withMessage('Categoría inválida'),
  
  body('description')
    .optional()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder 500 caracteres'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];
