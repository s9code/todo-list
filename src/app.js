/*// Mantiene los proyectos y permite añadir proyectos y tareas.
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

//////

import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

// Creamos los proyectos de la aplicación.
const defaultProject = createProject("General");
const tareasProject = createProject("Tareas");

// projects es el array principal de la aplicación, 
// donde van los proyectos creados.
const projects = [defaultProject, tareasProject];

// Creamos tareas de prueba.
const estudiarJavascript = createTodo(
  "Estudiar Javascript",
  "Repasar modulos",
  "2026-10-15",
  "alta"
);

const estudiarReact = createTodo(
  "Estudiar React",
  "Lecciones de Reac de TOP",
  "2026-11-15",
  "baja"
)

// Añadimos las tareas creadas al array "todos" de los proyectos creados.
defaultProject.todos.push(estudiarJavascript);
tareasProject.todos.push(estudiarReact);

console.log(projects);


export function changePriority(projectName, todoTitle, newPriority) {

  //Busca el proyecto llamado X
  const project = project.find(
    (project) => project.name === projectName
  );

  //Dentro de él busca la tarea llamada Y
  const todo = project.todo.find(
    (todo) => todo.title === todotitle
  );

  // A esa tarea cámbiale la prioridad por Z
  todo.priority = newPriority;

}

*/

