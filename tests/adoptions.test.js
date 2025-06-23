import request from 'supertest';
import express from 'express';
import adoptionsRouter from '../src/routes/adoptions.routes.js';

const app = express();
app.use(express.json());
app.use('/api/adoptions', adoptionsRouter);

describe('Adoptions API', () => {
    it('GET /api/adoptions should return all adoptions', async () => {
        const res = await request(app).get('/api/adoptions');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('GET /api/adoptions/1 should return an adoption', async () => {
        const res = await request(app).get('/api/adoptions/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('pet');
    });

    it('POST /api/adoptions should create an adoption', async () => {
        const res = await request(app)
            .post('/api/adoptions')
            .send({ pet: 'Toby', type: 'rabbit' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.pet).toBe('Toby');
    });
});
