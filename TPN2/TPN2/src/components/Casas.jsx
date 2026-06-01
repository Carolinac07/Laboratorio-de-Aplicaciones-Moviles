export default function Casas({casa, setCasa}){
    return (
        <select onChange={(e) => setCasa(e.target.value)}>
            <option value="">Todas las casas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
        </select>
    )
}