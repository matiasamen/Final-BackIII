import dotenv from 'dotenv';
import passport from 'passport';
import express from 'express';

import { connectDB } from './config/db.js';
import './config/passport.config.js';

// Rutas principales
import userRoutes from './routes/users.routes.js';
import productRoutes from './routes/products.routes.js';
import cartRoutes from './routes/carts.routes.js';
import sessionRoutes from './routes/sessions.routes.js';
import adoptionsRouter from './routes/adoptions.routes.js';

// Swagger (documentación)
import swaggerConfig from './swagger.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Rutas API
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/adoptions', adoptionsRouter);

// Swagger docs
swaggerConfig(app);

// Ruta de prueba
app.get('/test-conexion', (req, res) => {
    res.send('✅ API Conecta Bien responde correctamente');
});

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        console.log(`📘 Documentación en http://localhost:${PORT}/docs`);
    });
};

startServer();