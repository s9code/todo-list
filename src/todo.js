// Gestión de los datos de las tareas.

// Esta factory crea y devuelve un objeto nuevo por cada tarea.
// Las propiedades toman los valores de los parámetros y la tarea empieza sin completar.
export function todo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false
    };
}

// Modificamos las propiedades de la tarea recibida; no creamos otra tarea.
export function updateTodo(todo, newTitle, newDescription, newDueDate, newPriority) {
    todo.title = newTitle;
    todo.description = newDescription;
    todo.dueDate = newDueDate;
    todo.priority = newPriority;
}

// Esta función se ejecuta al cambiar el checkbox, mediante la callback de dom.js.
export function toggleTodoComplete(todo) {
    // ! invierte el booleano: true pasa a false y false pasa a true.
    todo.completed = !todo.completed;
}
