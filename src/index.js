// Importamos las funciones para gestionar los datos y crear los elementos de pantalla.
import { todo } from "./todo.js";
import { projects } from "./project.js";
import { addTodoProject } from "./project.js";
import { toggleTodoComplete } from "./todo.js";
import { removeTodoProject } from "./project.js";
import { createProjectElement } from "./dom.js";
import { createTodoElement } from "./dom.js";

// Creamos los datos de las tareas; todavía no aparecen en pantalla.

const tarea1 = todo("javascript", "javascript en Top", "2026-10-02", "alta");
const tarea2 = todo("bucles", "bucles en top", "2026-02-04", "alta");

// Creamos los proyectos, cada uno con su propio array de tareas.

const general = projects("General");

const pendientes = projects("Pendientes")

// Guardamos las dos tareas en el array de tareas del proyecto General.

addTodoProject(general, tarea1);

addTodoProject(general, tarea2);

// Esta callback se ejecuta al pulsar Eliminar y recibe la tarea de ese botón.
// Aquí indicamos de qué proyecto debe borrarse: General.
function deleteTodo(todo) {
    removeTodoProject(general, todo);
}

// Creamos los elementos HTML que muestran los nombres de los proyectos.
const generalElement = createProjectElement(general);
const pendientesElement = createProjectElement(pendientes);

// Añadimos el nombre del proyecto General a la página.
document.body.appendChild(generalElement);

// Recorremos sus tareas para crear y mostrar el elemento HTML de cada una.
general.todos.forEach((todo) => {
    // Pasamos las funciones sin ejecutarlas: dom.js las llamará al interactuar.
    // toggleTodoComplete se recibe como onCompleteChange y deleteTodo como onDelete.
    const todoElement = createTodoElement(todo, toggleTodoComplete, deleteTodo);
    document.body.appendChild(todoElement);
})

// Mostramos el nombre del proyecto Pendientes, que por ahora no tiene tareas.
document.body.appendChild(pendientesElement);
