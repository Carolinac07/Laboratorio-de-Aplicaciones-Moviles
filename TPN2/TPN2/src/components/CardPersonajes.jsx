import noEncontrada from "../assets/noencontrada.png"

export default function CardPersonaje({ personaje }) {

  return (
    <div className="personaje">
        <h3>{personaje.name}</h3>
        {personaje.image === ""
        ? <img src={noEncontrada} alt={personaje.name} />
        : <img src={personaje.image} alt={personaje.name} />
      }
        <p>Casa: {personaje.house}</p>
        
    </div>
  )
}