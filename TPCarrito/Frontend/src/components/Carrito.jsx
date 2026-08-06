function Carrito({ carrito, vaciarCarrito }) {
    let total = 0;
    carrito.forEach((producto) => {
        total = total + (producto.price * producto.cantidad);
    });

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
            <button>
                Comprar
            </button>
            <button onClick={vaciarCarrito}>
                Vaciar carrito
            </button>
        </div>
    );
}

export default Carrito;