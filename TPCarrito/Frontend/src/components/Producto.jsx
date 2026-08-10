function Producto({ producto, agregarAlCarrito }) {
    return (
        <div className="producto">
            <img 
                src={producto.thumbnail}
                alt={producto.title}
            />
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>

            <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
            </button>
        </div>
    )
}
export default Producto