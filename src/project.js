import { crearTarea } from "./todo.js"

// Crea y devuelve un proyecto con su nombre y una colección de tareas vacía.

export function crearProyectos(nombre) {
    return {
        nombre,
        tareas: []
    }
}

// Añade la tarea recibida a la colección de tareas del proyecto indicado.
export function agregarTareaAProyecto(proyecto, tarea) {
    proyecto.tareas.push(tarea);
}

export function eliminarTarea(proyecto, tarea) {
    const indice = proyecto.tareas.indexOf(tarea);

    if(indice !== -1) {
        proyecto.tareas.splice(indice, 1);
    }
}