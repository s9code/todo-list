import { crearTarea } from "./todo.js";
import { crearProyectos, agregarTareaAProyecto, eliminarTarea } from "./project.js";
import {crearElementoProyecto, crearElementoTarea} from "./dom.js";

// Contenedores del DOM donde se mostrarán los proyectos y las tareas.
const contenedorProyectos = document.querySelector("#contenedorProyectos");
const contenedorTareas = document.querySelector("#contenedorTareas");

// Crea los proyectos y las tareas iniciales de la aplicación.
const general = crearProyectos("General");
const aficiones = crearProyectos("Aficiones");

const hobbies = crearTarea("Deporte", "Futbol", "20.03.97", "alta");
const compra = crearTarea("Comprar fruta", "Manzanas y plátanos", "2026-11-10", "media");
const lectura = crearTarea("Leer un capítulo", "Continuar el libro pendiente", "2026-11-12", "baja");

// Asigna las tareas a sus respectivos proyectos.
agregarTareaAProyecto(general, hobbies);
agregarTareaAProyecto(aficiones, compra);
agregarTareaAProyecto(aficiones, lectura);

// Guarda todos los proyectos en un único array.
const proyectos = [];
proyectos.push(general, aficiones);

// Recorre los proyectos y muestra sus elementos en el DOM.
proyectos.forEach((elemento) => {
    contenedorProyectos.appendChild(crearElementoProyecto(elemento, seleccionarProyecto));
})

// Proyecto seleccionado inicialmente.
let proyectoActivo = general;

// Cambia el proyecto activo y actualiza las tareas visibles.
function seleccionarProyecto(proyecto) {
   
    proyectoActivo = proyecto;

    // Limpia las tareas que había en pantalla
    contenedorTareas.textContent = "";

    //Recorre las tareas del proyecto activo y las muestra
    proyectoActivo.tareas.forEach((elemento) => {
        contenedorTareas.appendChild(crearElementoTarea(elemento));
    })

}

seleccionarProyecto(general);
