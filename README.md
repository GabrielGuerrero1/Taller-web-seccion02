# Taller-seccion02

Taller IV - Programacion Web

## Estructura

- `backend/`: API REST con Express (puerto 3000)
- `frontend/`: Vite + React + Reactstrap (puerto 5173)

## Endpoints

| Metodo | Ruta          | Descripcion                                   |
| ------ | ------------- | --------------------------------------------- |
| GET    | `/api/health` | Indica si el API esta funcionando             |
| GET    | `/api/info`   | Carnet, ciudad, carrera y proyectos de los integrantes |

## Como correrlo

Backend:

```bash
cd backend
npm install
npm start
```

Frontend (en otra terminal):

```bash
cd frontend
npm install
npm run dev
```

Abrir http://localhost:5173. El frontend usa el proxy de Vite para mandar las peticiones de `/api` al backend en el puerto 3000, asi que el backend tiene que estar corriendo.
