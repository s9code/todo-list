// Módulo encargado de crear los objetos proyectos

// Construye el objeto
export function createProject(name) {
    return {
        name: name,
        todos: []
    };
}