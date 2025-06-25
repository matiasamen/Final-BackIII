import { Router } from 'express';
import { UserDAO } from '../dao/User.dao.js';
import { UserDTO } from '../dto/User.dto.js';

const router = Router();
const userDao = new UserDAO();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints relacionados con usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario
 *         first_name:
 *           type: string
 *           description: Nombre del usuario
 *         last_name:
 *           type: string
 *           description: Apellido del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico
 *         role:
 *           type: string
 *           description: Rol del usuario
 *       example:
 *         _id: 609e129e8bfa2a0015b7089f
 *         first_name: Lionel
 *         last_name: Messi
 *         email: messi@futbol.com
 *         role: user
 */

/**
 * @swagger
 * /api/users/current:
 *   get:
 *     summary: Obtener el usuario actual
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener el usuario
 */

// Simulación de autenticación
router.get('/current', async (req, res) => {
    try {
        // Simulamos que tenemos un usuario logueado con un ID fijo
        const user = await userDao.getById('681a6cbea868bc04c14636f2'); 

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const safeUser = new UserDTO(user);
        res.json(safeUser);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

export default router;