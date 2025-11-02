import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del servicio es requerido'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: [0, 'El precio no puede ser negativo']
  },
  duration: {
    type: Number, // duración en minutos
    default: 30,
    min: [15, 'La duración mínima es 15 minutos']
  },
  category: {
    type: String,
    enum: ['cera', 'laser', 'combo'],
    default: 'cera'
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
