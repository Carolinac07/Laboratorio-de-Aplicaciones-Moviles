

export default function Buscador({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  )
}