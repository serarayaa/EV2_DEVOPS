import Reservation from '../models/Reservation.js';
import Service from '../models/Service.js';

// GET /api/reservations - Obtener todas las reservas
export const getAllReservations = async (req, res, next) => {
  try {
    const { status, date } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      filter.date = { $gte: startDate, $lt: endDate };
    }

    const reservations = await Reservation.find(filter)
      .populate('serviceId', 'name price')
      .sort({ date: 1, time: 1 });

    res.json({
      success: true,
      count: reservations.length,
      data: reservations
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/reservations/:id - Obtener una reserva por ID
export const getReservationById = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
      .populate('serviceId', 'name price duration');

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada'
      });
    }

    res.json({
      success: true,
      data: reservation
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/reservations - Crear nueva reserva
export const createReservation = async (req, res, next) => {
  try {
    const { serviceId, date, time } = req.body;

    // Verificar que el servicio existe
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado'
      });
    }

    // Verificar disponibilidad (no puede haber dos reservas en la misma fecha/hora)
    const existingReservation = await Reservation.findOne({
      date: new Date(date),
      time,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (existingReservation) {
      return res.status(409).json({
        success: false,
        message: 'Ya existe una reserva para esta fecha y hora'
      });
    }

    // Crear la reserva
    const reservation = await Reservation.create({
      ...req.body,
      serviceName: service.name
    });

    res.status(201).json({
      success: true,
      message: 'Reserva creada exitosamente',
      data: reservation
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/reservations/:id - Actualizar reserva
export const updateReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada'
      });
    }

    res.json({
      success: true,
      message: 'Reserva actualizada exitosamente',
      data: reservation
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/reservations/:id - Eliminar reserva
export const deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada'
      });
    }

    res.json({
      success: true,
      message: 'Reserva eliminada exitosamente'
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/reservations/:id/status - Cambiar estado de reserva
export const updateReservationStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'completed', 'cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Estado inválido'
      });
    }

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada'
      });
    }

    res.json({
      success: true,
      message: `Reserva marcada como ${status}`,
      data: reservation
    });
  } catch (error) {
    next(error);
  }
};
