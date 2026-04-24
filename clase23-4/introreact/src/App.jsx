import "./App.css"
import New from './component/New.jsx'
import { SinDefault, SinDefault2 } from './component/SinDefault.jsx'
import Saludar from './component/Saludar.jsx'
import Autos from "./component/Autos.jsx"

function App() {
const nombre = "Carolina"
const nombre2 = "Ariel"
const autos = {nombre: "Fiesta", marca: "Ford", año: 2023, color: "Gris"}

  return (
    <>
      <h1 className='titulo'>Bienvenidos</h1>
      <h2>Hola {nombre}</h2>
      <New/>  
      <SinDefault/>
      <SinDefault2/>
      <Parrafo/>
      <Saludar nombre= {"Carolina"} apellido= {"Cardoso"} edad={18}></Saludar>
      <Saludar nombre= {"Ariel"} apellido= {"Aberrastegui"} edad={18}></Saludar>
      <Saludar nombre= {"Benicio"} apellido= {"Caraccio"} edad={18}></Saludar>
      <Saludar nombre= {"Tomas"} apellido= {"Burgos"} edad={17}></Saludar>

      <Autos autos={autos}></Autos>
    </>
  )
}

function Parrafo(){
  return(
    <>
      <h2>Hola, estoy desde la función.</h2>
    </>
  )
} 

export default App
