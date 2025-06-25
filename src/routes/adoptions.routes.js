
import { Router } from 'express';
import {
    getAllAdoptions,
    getAdoptionById,
    createAdoption
} from '../controllers/adoptions.controller.js';

const router = Router();

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtener todas las adopciones mockeadas
 *     tags: [Adoptions]
 *     responses:
 *       200:
 *         description: Lista de adopciones generadas exitosamente
 */
router.get('/', getAllAdoptions);

/**
 * @swagger
 * /api/adoptions/{id}:
 *   get:
 *     summary: Obtener una adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la adopción
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *       404:
 *         description: Adopción no encontrada
 */
router.get('/:id', getAdoptionById);

/**
 * @swagger
 * /api/adoptions:
 *   post:
 *     summary: Crear una nueva adopción mockeada
 *     tags: [Adoptions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               especie:
 *                 type: string
 *               edad:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Adopción creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', createAdoption);

export default router;