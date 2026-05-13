import { useState } from "react";

export default function Lista() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")

    const handleAgregar = () => {
        if (task === ""){
            return
        }

        setTasks([...tasks, {id: Date.now(), tarea: task, completada: false}])

        setTask("")
    }

    const handleChange = (e) => {
        setTask (e.target.value)
    }

    const handleCompletar = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completada: !task.completada} : task))
    }

    const handleEliminar = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return(
    <div className="contenedor">

        <h1 className="titulos">Lista de tareas</h1><br />

        <div className="agregarTareas">
            <input className="barra" type="text" value={task} onChange={e => handleChange(e)} />
            <button className="boton" onClick={handleAgregar}>Agregar</button>
        </div>

        {
            tasks.map(task => (
                <div key={task.id} className="tarea">
                    <p className={task.completada ? "completada" : ""}>{task.tarea}</p>

                    <div className="botones">
                        <button className="tick" onClick={() => handleCompletar(task.id)}>✓</button>
                        <button className="eliminar" onClick={() => handleEliminar(task.id)}>X</button>
                    </div>
                </div>
            ))
        }

    </div>
    )
}