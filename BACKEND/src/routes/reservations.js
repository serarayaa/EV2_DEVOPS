import express from 'express';
import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  updateReservationStatus
} from '../controllers/reservationController.js';
import { validateReservation } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.post('/', validateReservation, createReservation);
router.put('/:id', validateReservation, updateReservation);
router.delete('/:id', deleteReservation);
router.patch('/:id/status', updateReservationStatus);

export default router;
