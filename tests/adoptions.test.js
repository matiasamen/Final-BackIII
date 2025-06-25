// tests/adoptions.test.js:

import request from 'supertest';
import express from 'express';
import adoptionsRouter from '../src/routes/adoptions.routes.js';

const app = express();
app.use(express.json());
app.use('/api/adoptions', adoptionsRouter);

describe('📦 Testing Adoptions Endpoints (Proyecto Final Backend III)', () => {
    
    it('GET /api/adoptions → debe devolver todas las adopciones', async () => {
        const res = await request(app).get('/api/adoptions');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('GET /api/adoptions/:id → debe devolver una adopción específica si el ID existe', async () => {
        const all = await request(app).get('/api/adoptions');
        const idExistente = all.body[0]?.id || 1;

        const res = await request(app).get(`/api/adoptions/${idExistente}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('pet');
    });

    it('GET /api/adoptions/:id → debe devolver 404 si el ID no existe', async () => {
    const res = await request(app).get('/api/adoptions/9999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toMatch(/not found/i);
});

    it('POST /api/adoptions → debe crear una nueva adopción con datos válidos', async () => {
        const nuevaAdopcion = { pet: 'Lola', type: 'dog' };

        const res = await request(app)
            .post('/api/adoptions')
            .send(nuevaAdopcion);

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.pet).toBe(nuevaAdopcion.pet);
    });

    it('POST /api/adoptions → debe fallar si falta un campo requerido', async () => {
    const res = await request(app)
        .post('/api/adoptions')
        .send({ pet: 'Firulais' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toMatch(/faltan/i);
});

});
