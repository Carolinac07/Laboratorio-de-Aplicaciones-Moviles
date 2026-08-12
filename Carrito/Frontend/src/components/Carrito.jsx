function Carrito({ carrito, vaciarCarrito }) {
    let total = 0
    carrito.forEach((producto) => {
        total = total + (producto.price * producto.cantidad)
    })

function comprar(carrito) {

    fetch("http://localhost:3000/comprar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(carrito)
    })
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error("Error al comunicarse con el servidor");
        }
        return respuesta.json();
    })
    .then((datos) => {
        console.log(datos)
        window.location.href = datos.link
    })
    .catch((error) => {
        console.log(error)
    })

}
    return (
        <div className="carrito">
            <h2>Carrito</h2>
            {
                carrito.map((producto, indice) => (
                    <div key={indice}>
                        <p>
                            {producto.title} x {producto.cantidad}
                        </p>
                        <p>
                            Precio: ${producto.price * producto.cantidad}
                        </p>
                    </div>
                ))
            }
            <h3>
                Total: ${total}
            </h3>
          <button onClick={() => comprar(carrito)}>
            Comprar
          </button>
            <button onClick={vaciarCarrito}>
                Vaciar carrito
            </button>
        </div>
    )
}

export default Carrito