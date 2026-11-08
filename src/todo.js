// Factory que crea y devuelve un nuevo objeto tarea en cada llamada.

export function crearTarea(titulo, descripcion, fecha, prioridad) {
    return  {
        titulo,
        descripcion,
        fecha,
        prioridad,
        estado: false
    };
}

// Actualiza el título, la descripción, la fecha y la prioridad de la tarea recibida, conservando su estado.
// No necesitas return, porque el trabajo de la función es modificarlo. Su estado permanece igual porque no lo has tocado. 
export function modificarTarea(tarea, nuevoTitulo ,nuevaDescripcion, nuevaFecha, nuevaPrioridad) { 
    tarea.titulo = nuevoTitulo
    tarea.fecha = nuevaFecha
    tarea.prioridad = nuevaPrioridad
    tarea.descripcion = nuevaDescripcion
}

export function modificarEstado(tarea) {
    if (tarea.estado === false ) {
        tarea.estado = true;
    } else {
        tarea.estado = false;
    }
}