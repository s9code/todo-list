// Punto de entrada de la aplicación: carga los estilos y conecta los módulos.

//import "./style.css";
//import "./app.js"

import { crearTarea, modificarTarea, modificarEstado } from "./todo.js";
import { crearProyectos, agregarTareaAProyecto } from "./project.js";

const hobbies = crearTarea("Deporte", "Futbol", "20.03.97", "alta");

console.log(hobbies);

const proyecto = crearProyectos("Aficiones");

agregarTareaAProyecto(proyecto, hobbies);

modificarTarea(hobbies, "Literatura", "Cioran", "20.03.97", "prioridad");

console.log(proyecto);

modificarEstado(hobbies);
console.log(hobbies.estado);

modificarEstado(hobbies);
console.log(hobbies.estado);

