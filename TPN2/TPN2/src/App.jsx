import { useState, useEffect } from 'react'
import Buscador from './components/buscador'
import ListaPersonajes from './components/listaPersonajes'
import Casas from './components/Casas'
import './App.css'

function App() {
  const [personajes, setPersonajes] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [casa, setCasa] = useState("")

  const texto = busqueda.toLowerCase()
  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(texto) &&
    (casa === "" || personaje.house === casa)
  )

  useEffect(() => {
    fetch ("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setPersonajes(data))
  }, [])

  return (
    <>
      <h1 className='titulo'>Personajes de Harry Potter</h1>

      <Casas setCasa={setCasa}></Casas>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda}></Buscador>
      <ListaPersonajes personajes={personajesFiltrados}></ListaPersonajes>
    </>
  )
}

export default App
