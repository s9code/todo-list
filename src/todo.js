// Módulo responsable de crear y devolver un objeto tarea

// Factory que crea y devuelve un nuevo objeto tarea en cada llamada.
export function createTodo(title, description, dueDate, priority) {

    const tarea = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };

    return tarea;
}