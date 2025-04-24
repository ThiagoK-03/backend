# Backend - Proyecto TP

Este es el backend del proyecto **TP**, desarrollado con Node.js y Express. Expone una API RESTful para ser consumida por el frontend.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- PostgreSQL
- MikroORM
- JWT (autenticación)
- Dotenv (variables de entorno)

## 🚀 Comenzar

### 1. Clonar el repositorio

```bash
git clone https://github.com/ale-montes/backend.git
```

### 2. Instalar dependencias

```bash
cd backend
npm install
```

### 3. Crear el archivo de entorno

Renombrá `.env.example` a `.env` y completá los valores necesarios:

```bash
cp .env.example .env
```

### 4. Correr migraciones (Pendiente)

```bash
npm run migration:up
```

### 5. Ejecutar el servidor en modo desarrollo

```bash
npm run dev
```

El servidor correrá en `http://localhost:3000`.

---

## 📁 Estructura del proyecto

```bash
backend/
├── src/
│   ├── controllers/
│   ├── entities/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── app.ts
│   └── server.ts
├── .env
├── orm.config.ts
├── package.json
└── tsconfig.json
```

---

## 🧪 Scripts útiles

| Comando         | Descripción                |
| --------------- | -------------------------- |
| `npm run dev`   | Ejecuta en modo desarrollo |
| `npm run start` | Ejecuta desde `/dist`      |
| `npm run test`  | Ejecuta los tests          |

---

## 📟 Licencia

MIT © [DWS]
