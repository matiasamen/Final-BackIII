import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Adoptions API',
            description: 'Documentación de la API del proyecto final Backend III (Coderhouse). Incluye endpoints de autenticación, productos, carritos y adopciones simuladas.',
            version: '1.0.0'
        }
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(swaggerOptions);

export default (app) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};