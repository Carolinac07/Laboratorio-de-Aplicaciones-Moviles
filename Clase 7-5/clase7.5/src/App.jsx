import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [luz, setLuz] = useState(0)

  const decrementar =() => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const cambiarLuz =() => {
    setLuz(!luz)
    }

  return (
    <>
      <h1>{contador}</h1>
      <button className='contador' onClick={() => setContador (contador + 1)}>Incrementar</button>
      <button className='contador' onClick={decrementar}>Decrementar</button>
      <button className='contador' onClick={() => setContador (contador + 5)}>5</button>

      <button onClick={cambiarLuz}>Encender / apagar</button>
      <h1>{luz ? "Prendida" : "Apagada"}</h1>

    </>
  )
}

export default App