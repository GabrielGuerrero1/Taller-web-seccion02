const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'El API esta funcionando correctamente' })
})

app.get('/api/info', (req, res) => {
  res.json({
    status: 'ok',
    integrantes: [
      {
        carnet: '00112824',
        nombre: 'Gabriel Guerrero',
        ciudad: 'San Salvador',
        carrera: 'Ingeniería en Sistemas',
        proyectos: 5,
      },
    ],
  })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
