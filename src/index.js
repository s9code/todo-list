// Punto de entrada de la aplicación: carga los estilos y conecta los módulos.

//import "./style.css";
//import "./app.js"

import { crearTarea, modificarTarea, modificarEstado } from "./todo.js";
import { crearProyectos, agregarTareaAProyecto, eliminarTarea } from "./project.js";
import {crearElementoProyecto} from "./dom.js";

const hobbies = crearTarea("Deporte", "Futbol", "20.03.97", "alta");

console.log(hobbies);

const aficiones = crearProyectos("Aficiones");

agregarTareaAProyecto(aficiones, hobbies);

modificarTarea(hobbies, "Literatura", "Cioran", "20.03.97", "prioridad");

modificarEstado(hobbies);
console.log(hobbies.estado);

modificarEstado(hobbies);
console.log(hobbies.estado);

const compra = crearTarea("Comprar fruta", "Manzanas y plátanos", "2026-11-10", "media");
const lectura = crearTarea("Leer un capítulo", "Continuar el libro pendiente", "2026-11-12", "baja");

agregarTareaAProyecto(aficiones, compra);
agregarTareaAProyecto(aficiones, lectura);

console.log(aficiones);

eliminarTarea(aficiones, compra);

console.log(aficiones);

const proyectos = [];

const general = crearProyectos("General");

proyectos.push(general, aficiones);

console.log(proyectos);

const contenedor = document.querySelector("#contenedor");

proyectos.forEach((elemento) => {
    contenedor.appendChild(crearElementoProyecto(elemento));
})