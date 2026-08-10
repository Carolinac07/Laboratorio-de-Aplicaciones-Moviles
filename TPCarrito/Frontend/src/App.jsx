import { useEffect, useState } from "react"
import Producto from "./components/Producto"
import Carrito from "./components/Carrito"
import "./App.css"

function App() {

  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  function agregarAlCarrito(producto) {
    const productoExiste = carrito.find(
        (item) => item.id === producto.id
    );
    if (productoExiste) {
        const nuevoCarrito = carrito.map((item) => {
            if (item.id === producto.id) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                }
            }
            return item
        })
        setCarrito(nuevoCarrito)
    } else {
        setCarrito([
            ...carrito,
            {
                ...producto,
                cantidad: 1
            }
        ])
    }
}
    function vaciarCarrito() {
      setCarrito([])
    }
  return (
    <div className="contenedor">
      <h1>De Todo Un Poco</h1>

      <div className="productos">
        {
          productos.map((producto) => (

            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))
        }
      </div>
      <Carrito 
        carrito={carrito} 
        vaciarCarrito={vaciarCarrito}
      />
    </div>
  )
}
export default App