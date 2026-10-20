import { useEffect, useState } from 'react'

function HealthStatus() {
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error('Error en la peticion')
        return res.json()
      })
      .then((data) => setMensaje(data.message))
      .catch(() => setError(true))
  }, [])

  return (
    <section className="health">
      <div className={error ? 'health-card health-error' : 'health-card'}>
        <h4>Estado del API</h4>
        {error ? (
          <p>No se pudo conectar con el API</p>
        ) : (
          <p>{mensaje || 'Cargando...'}</p>
        )}
      </div>
    </section>
  )
}

export default HealthStatus
