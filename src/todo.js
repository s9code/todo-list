// Crea objetos tarea a partir de los datos recibidos.

// Factory que crea y devuelve un nuevo objeto tarea en cada llamada.
export function createTodo(title, description, dueDate, priority) {

    // Cada propiedad toma el valor del parámetro situado a la derecha del :.
    // Este objeto se crea dentro de la función: cada llamada genera uno nuevo.
    const tarea = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };

    // Entrega el objeto a quien llamó a la función, para que pueda utilizarlo.
    // Añadirlo a un proyecto es una operación que gestiona app.js.
    return tarea;
}
