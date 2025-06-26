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

## 📂 Estructura general

