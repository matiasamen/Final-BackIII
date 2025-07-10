import { Router } from 'express';
import { faker } from '@faker-js/faker';

console.log("✅ mocks.routes.js cargado correctamente");

const router = Router();

router.get('/mockingusers', (req, res) => {
    const users = [];

    for (let i = 0; i < 50; i++) {
        users.push({
            id: faker.database.mongodbObjectId(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 70 }),
            address: faker.location.streetAddress()
        });
    }

    res.json(users);
});

export default router;
