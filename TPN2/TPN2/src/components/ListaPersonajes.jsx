import CardPersonaje from "./cardPersonajes"

export default function ListaPersonajes({ personajes }) {
  return (
    <div className="listaPersonajes">
      {personajes.map((personaje) => (
        <CardPersonaje
          key={personaje.id}
          personaje={personaje}
        />
      ))}
    </div>
  )
}