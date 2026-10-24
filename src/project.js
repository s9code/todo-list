// Gestión de los datos de los proyectos y de las tareas que contienen.

// Esta factory crea un proyecto con su nombre y un array de tareas vacío.
export function projects(name) {
    return {
        name,
        todos: []
    };
}

// Recibimos el proyecto y la tarea que queremos añadir a su array.
export function addTodoProject(project, todo) {
    // push añade la tarea al final del array.
    project.todos.push(todo);
}

// Quitamos la tarea del proyecto recibido.
export function removeTodoProject(project, todo) {
    // Buscamos la posición de ese mismo objeto en el array; si no está, devuelve -1.
    const index = project.todos.indexOf(todo);

    // Solo borramos si encontramos la tarea.
    if(index !== -1) {
        // Desde la posición encontrada, eliminamos un elemento del array.
        project.todos.splice(index, 1);
    }
}

