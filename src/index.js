import { todo } from "./todo.js";
import { projects } from "./project.js";
import { addTodoProject } from "./project.js";
//import { updateTodo } from "./todo.js";
//import { toggleTodoComplete } from "./todo.js";
//import { removeTodoProject } from "./project.js";
import { createProjectElement } from "./dom.js";
import { createTodoElement } from "./dom.js";

// creacion de tareas

const tarea1 = todo("javascript", "javascript en Top", "2026-10-02", "alta");
const tarea2 = todo("bucles", "bucles en top", "2026-02-04", "alta");

// creacion de proyectos

const general = projects("General");

const pendientes = projects("Pendientes")

// añadir tareas a proyectos

addTodoProject(general, tarea1);

addTodoProject(general, tarea2);

/*
modificar una tarea

updateTodo(tarea1, "Actualizado", "Array en top", "2024-10-03", "baja");
*/

/*
cambia el estado completed

//toggleTodoComplete(tarea1);
*/

/*
borra una tarea de un proyecto

//removeTodoProject(general, tarea1);
*/

const htmlGeneral = createProjectElement(general);
const htmlPendientes = createProjectElement(pendientes);

document.body.appendChild(htmlGeneral);

general.todos.forEach((todo) => {
    const htmlTodo = createTodoElement(todo);
    document.body.appendChild(htmlTodo);
})

document.body.appendChild(htmlPendientes);



