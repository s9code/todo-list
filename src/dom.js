 // Crea un elemento HTML para mostrar un proyecto y detectar su selección.
export function crearElementoProyecto(proyecto, alSeleccionar) {

    const elementoProyecto = document.createElement("p");

    elementoProyecto.textContent = proyecto.nombre;

    // Ejecuta el callback recibido cuando se hace clic en el proyecto.
    elementoProyecto.addEventListener("click", () => {
        alSeleccionar(proyecto);
    })

    return elementoProyecto;

}

// Crea y devuelve un elemento HTML con el título de una tarea.
export function crearElementoTarea(tarea) {
    
    const elementoTarea = document.createElement("p");

    elementoTarea.textContent = tarea.titulo;

    return elementoTarea;
}

