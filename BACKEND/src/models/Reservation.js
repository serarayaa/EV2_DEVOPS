import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'El nombre del cliente es requerido'],
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres']
  },
  clientEmail: {
    type: String,
    required: [true, 'El email es requerido'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Email inválido']
  },
  clientPhone: {
    type: String,
    required: [true, 'El teléfono es requerido'],
    trim: true,
    match: [/^[0-9]{8,12}$/, 'Teléfono inválido (8-12 dígitos)']
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'El servicio es requerido']
  },
  serviceName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: [true, 'La fecha es requerida'],
    validate: {
      validator: function(value) {
        return value > new Date();
      },
      message: 'La fecha debe ser futura'
    }
  },
  time: {
    type: String,
    required: [true, 'La hora es requerida'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de hora inválido (HH:MM)']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String,
    maxlength: [500, 'Las notas no pueden exceder 500 caracteres']
  }
}, {
  timestamps: true
});

// Índices para búsquedas eficientes
reservationSchema.index({ date: 1, time: 1 });
reservationSchema.index({ clientEmail: 1 });
reservationSchema.index({ status: 1 });

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
