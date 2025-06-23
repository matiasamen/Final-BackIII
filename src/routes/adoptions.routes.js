
import { Router } from 'express';
import {
    getAllAdoptions,
    getAdoptionById,
    createAdoption
} from '../controllers/adoptions.controller.js';

const router = Router();

router.get('/', getAllAdoptions);
router.get('/:id', getAdoptionById);
router.post('/', createAdoption);

export default router; // 👈 esto es clave

