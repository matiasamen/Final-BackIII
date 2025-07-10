# 🐾 Proyecto Final - Backend III

Este es el proyecto final de la materia **Backend III** de Coderhouse.
Autor: **Cristhian Matías Amén**.  
Extiende el proyecto del módulo Backend II, incorporando pruebas automáticas, documentación profesional y Dockerización.

---

## 🚀 Tecnologías utilizadas

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Passport** (estrategias Local y JWT)
- **JSON Web Tokens (JWT)**
- **Swagger** + `swagger-jsdoc`
- **Jest** + **Supertest**
- **Docker**
- **Patrones DAO, DTO y Repository**
- **Variables de entorno (`.env`)**

> # 📌 El archivo `.env` fue enviado al profe por mensaje privado para proteger la informacion.

---

## 🎯 Funcionalidades principales

- Registro y login de usuarios (`/api/sessions/register` y `/api/sessions/login`)
- Autenticación con Passport + JWT
- Rol **Admin** para crear, editar y eliminar productos
- Rol **User** para agregar productos al carrito y finalizar la compra
- Generación de **tickets** automáticos al finalizar una compra
- Persistencia completa con MongoDB Atlas (IP abierta `0.0.0.0/0`)
- Se creó una imagen Docker del proyecto utilizando un Dockerfile configurado con variables de entorno
- Arquitectura escalable con **DAO**, **DTO**, **controllers** y **services**

---

# Corrección y aclaración

## Dockerización del proyecto

⚠️ Esta parte ya estaba realizada, pero me olvidé de subir el paso a paso.  
La imagen fue creada y subida hace 13 días.

Se implementó la dockerización del proyecto para poder ejecutarlo en un contenedor,  
cumpliendo con los requerimientos del trabajo de Backend III.

---

### 📄 Archivo Dockerfile

Se creó un archivo `Dockerfile` que permite generar una imagen funcional del proyecto  
y ejecutarla en un contenedor.

---

### 🐳 Construcción y despliegue con Docker

#### Construir la imagen:

```bash
docker build -t matiamen2210/conecta-back-mati .
```
### Subir la imagen a Docker Hub:

 docker login
docker push matiamen2210/conecta-back-mati

### Ejecutar el contenedor con variables de entorno personalizadas:
docker run -d \
    --name conecta-back-mati \
    -p 8080:8080 \
    -e MONGO_URI="mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombreBaseDeDatos>?retryWrites=true&w=majority" \
    matiamen2210/conecta-back-mati

### Verifica que la API esté corriendo en:
👉 http://localhost:8080

 ### Imagen publicada en Docker Hub:
https://hub.docker.com/r/matiamen2210/conecta-back-mati



 # Mocking de usuarios con Faker.js
Se incorporó correctamente la funcionalidad de mocking solicitada en el trabajo de Backend III.

📄 Archivo: src/routes/mocks.routes.js

📦 Dependencia: @faker-js/faker

🔀 Ruta implementada: GET /api/mocks/mockingusers

🔧 Datos generados: 50 usuarios con id, name, email, age y address ficticios.

✅ Integrado en app.js mediante app.use('/api/mocks', mocksRouter)

# Esta parte fue corregida y agregada ya que me la había olvidado inicialmente.