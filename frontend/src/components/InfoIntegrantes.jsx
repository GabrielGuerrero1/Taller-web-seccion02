import { useEffect, useState } from 'react'
import { Alert, Badge, Card, CardBody, CardHeader, Spinner, Table } from 'reactstrap'

function InfoIntegrantes() {
  const [integrantes, setIntegrantes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/info')
      .then((res) => res.json())
      .then((data) => setIntegrantes(data.integrantes))
      .catch(() => setError(true))
      .finally(() => setCargando(false))
  }, [])

  return (
    <Card className="mb-4 shadow-sm">
      <CardHeader className="d-flex justify-content-between align-items-center">
        <strong>Informacion de los integrantes</strong>
        {!cargando && (
          <Badge color={error ? 'danger' : 'success'}>
            {error ? 'API sin conexion' : 'API funcionando'}
          </Badge>
        )}
      </CardHeader>
      <CardBody>
        {cargando && (
          <div className="text-center">
            <Spinner color="primary" />
          </div>
        )}

        {error && <Alert color="danger">No se pudo obtener la informacion del API</Alert>}

        {!cargando && !error && (
          <Table bordered hover responsive className="mb-0">
            <thead>
              <tr>
                <th>Carnet</th>
                <th>Nombre</th>
                <th>Ciudad de origen</th>
                <th>Carrera</th>
                <th>Proyectos</th>
              </tr>
            </thead>
            <tbody>
              {integrantes.map((item) => (
                <tr key={item.carnet}>
                  <td>{item.carnet}</td>
                  <td>{item.nombre}</td>
                  <td>{item.ciudad}</td>
                  <td>{item.carrera}</td>
                  <td>
                    <Badge color="primary" pill>
                      {item.proyectos}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </CardBody>
    </Card>
  )
}

export default InfoIntegrantes
