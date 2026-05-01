import './App.css'
import { Front } from '../components/front'
import Producto from '../components/Producto'

function App() {

const productosBelleza = [
  { id: 1, nombre: "Base líquida", precio: 8500, imagen: "base.jpg" },
  { id: 2, nombre: "Labial mate", precio: 4200, imagen: "labial.jpg" },
  { id: 3, nombre: "Máscara de pestañas", precio: 5600, imagen: "rimmel.jpg" }
]

  return (
    <>
      <Front srcImg="messi.jpg" >Lionel Andres Messi</Front>
      <Front srcImg="anto.png" >Antonella Rocuzzo</Front>
      <Front srcImg="jugando.png" >Messi Jugando</Front>

{

    productosBelleza.map(({id, nombre, precio, imagen}) => {
      return (
        <Producto key={id} nombre={nombre} precio={precio} imagen={imagen}></Producto>
      )
    })
}
    
    </>
  )
}

export default App