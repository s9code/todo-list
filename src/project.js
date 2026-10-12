// Crea objetos proyecto, que agrupan tareas en su array todos.

// Recibe el nombre y devuelve directamente un objeto proyecto nuevo.
export function createProject(name) {
    return {
        name: name,
        // Cada proyecto empieza sin tareas y tiene su propio array.
        todos: []
    };
}
