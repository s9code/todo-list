import { todo } from "./todo.js";
import { projects } from "./project.js";
import { addTodoProject } from "./project.js";
import { updateTodo } from "./todo.js";
import { toggleTodoComplete } from "./todo.js";

// creacion de tareas

const tarea1 = todo("javascript", "javascript en Top", "2026-10-02", "alta");
const tarea2 = todo("bucles", "bucles en top", "2026-02-04", "alta");

// creacion de proyectos

const general = projects("General");

const pendientes = projects("Pendientes")

// añadir tareas a proyectos

addTodoProject(general, tarea1);

addTodoProject(pendientes, tarea2);

// modificar una tarea

updateTodo(tarea1, "Actualizado", "Array en top", "2024-10-03", "baja");

// cambia el estado completed

toggleTodoComplete(tarea1);

// mostrar los proyectos y las tareas dentro

console.log(pendientes);
console.log(general);