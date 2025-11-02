import express from 'express';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} from '../controllers/serviceController.js';
import { validateService } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', validateService, createService);
router.put('/:id', validateService, updateService);
router.delete('/:id', deleteService);

export default router;
