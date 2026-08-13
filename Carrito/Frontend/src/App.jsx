import { useState } from "react"
import "./App.css"

function App() {
  const productos = [
    { id: 1, nombre: "Teclado", precio: 15,  imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
    { id: 2, nombre: "Mouse", precio: 8, imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400" },
    { id: 3, nombre: "Auriculares", precio: 20, imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 4, nombre: "Monitor", precio: 120, imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
    { id: 5, nombre: "Notebook", precio: 450, imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { id: 6, nombre: "Parlante", precio: 350, imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"}
  ]
  const [carrito, setCarrito] = useState([])
  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto])
  }
  function eliminarDelCarrito(id) {
    setCarrito(carrito.filter(producto => producto.id !== id))
  }
  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio,
    0
  )

async function comprar() {
  const respuesta = await fetch("http://localhost:3000/crear-pago", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      total: total
    })
  })
  const datos = await respuesta.json()
  window.location.href = datos.link
}

  return (
    <div className="contenedor">

      <h1>Tienda Tecno</h1>

      <h2>Productos</h2>

      <div className="productos">
        {productos.map(producto => (
          <div className="producto" key={producto.id}>

            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>

            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {carrito.map((producto, index) => (
            <div className="item" key={index}>
              <span>
                {producto.nombre} - ${producto.precio}
              </span>
              <button onClick={() => eliminarDelCarrito(producto.id)}>
                X
              </button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button className="comprar" onClick={comprar}>
            Comprar
          </button>
        </div>
      )}
    </div>
  )
}
export default App