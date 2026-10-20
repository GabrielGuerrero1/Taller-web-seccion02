import { Container } from 'reactstrap'
import HealthStatus from './components/HealthStatus'
import './App.css'

function App() {
  return (
    <Container>
      <h1 className="titulo-principal">Taller IV</h1>
      <HealthStatus />
    </Container>
  )
}

export default App
