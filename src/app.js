// Mantiene los proyectos y permite añadir proyectos y tareas.
// Los datos viven en memoria: todavía no se guardan al recargar la página.

import { createProject } from "./project.js";

// Crea el proyecto inicial: { name: "General", todos: [] }.
const defaultProject = createProject("General");

// Colección de proyectos. Cada objeto proyecto contiene su propio array todos.
// Al principio solo contiene General, sin tareas. No se crea una copia del objeto.
const projects = [defaultProject];

// Permite consultar la colección desde otros módulos.
// Devuelve el mismo array, no una copia ni un proyecto nuevo.
export function getProjects() {
    return projects;
}

// Crea un proyecto con el nombre recibido y lo añade a la colección.
export function addProject(name) {
    const project = createProject(name);
    projects.push(project);
}

// Recibe un objeto proyecto y un objeto tarea que ya existen.
// Añade la tarea al array todos de ese proyecto, conservando las anteriores.
// No necesita return: modifica directamente el array del proyecto recibido.
export function addTodoToProject(project, todo) {
    project.todos.push(todo);
}
