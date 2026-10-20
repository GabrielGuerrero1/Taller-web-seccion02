import { Container } from 'reactstrap'
import HealthStatus from './components/HealthStatus'
import InfoIntegrantes from './components/InfoIntegrantes'
import './App.css'

function App() {
  return (
    <Container>
      <h1 className="titulo-principal">Taller IV</h1>
      <HealthStatus />
      <InfoIntegrantes />
    </Container>
  )
}

export default App
