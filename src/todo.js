 // Factory que crea y devuelve una nueva tarea con sus propiedades.
export function crearTarea(titulo, descripcion, fecha, prioridad) {
    return  {
        titulo,
        descripcion,
        fecha,
        prioridad,
        estado: false
    };
}

// Modifica las propiedades de una tarea existente, conservando su estado. 
export function modificarTarea(tarea, nuevoTitulo ,nuevaDescripcion, nuevaFecha, nuevaPrioridad) { 
    tarea.titulo = nuevoTitulo;
    tarea.fecha = nuevaFecha;
    tarea.prioridad = nuevaPrioridad;
    tarea.descripcion = nuevaDescripcion;
}

// Alterna el estado de una tarea entre pendiente (false) y completada (true).
export function modificarEstado(tarea) {
    if (tarea.estado === false ) {
        tarea.estado = true;
    } else {
        tarea.estado = false;
    }
}