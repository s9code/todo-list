// Módulo encargado de crear los objetos proyectos

export function createProject(name) {
    return {
        name: name,
        todos: []
    };
}