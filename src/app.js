// Módulo que mantiene la colección de proyectos
// y gestiona las operaciones sobre ella

import { createProject } from "./project.js";

const general = createProject("General");

const projects = [general];

export function getProjects() {
    return projects;
}

// Añade el objeto a la colección de la aplicación

export function addProject(nombre) {
    const proyecto = createProject(nombre);
    projects.push(proyecto);
}
