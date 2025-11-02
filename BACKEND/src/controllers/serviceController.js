import Service from '../models/Service.js';

// GET /api/services - Obtener todos los servicios
export const getAllServices = async (req, res, next) => {
  try {
    const { active, category } = req.query;
    const filter = {};
    
    if (active !== undefined) filter.active = active === 'true';
    if (category) filter.category = category;

    const services = await Service.find(filter).sort({ name: 1 });

    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/services/:id - Obtener un servicio por ID
export const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/services - Crear nuevo servicio
export const createService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Servicio creado exitosamente',
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/services/:id - Actualizar servicio
export const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Servicio actualizado exitosamente',
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/services/:id - Eliminar servicio
export const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Servicio eliminado exitosamente'
    });
  } catch (error) {
    next(error);
  }
};
