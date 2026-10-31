// Creamos los elementos HTML y conectamos sus eventos con las funciones recibidas.

import { addTodoProject } from "./project.js";

// Creamos el título del proyecto y lo devolvemos para añadirlo a la página desde index.js.
export function createProjectElement(project) {

    const projects = document.createElement("h1");
    projects.textContent = project.name;

    return projects;
}

// Recibimos los datos de una tarea y dos funciones que index.js pasa como argumentos.
// onCompleteChange recibe toggleTodoComplete; onDelete recibe deleteTodo.
export function createTodoElement(todo, onCompleteChange, onDelete) {
    
    // Este contenedor agrupa todos los elementos de una sola tarea.
    const container = document.createElement("div");
    const titleElement = document.createElement("h3");
    const date = document.createElement("p");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";

    // La callback se ejecuta cuando cambia el checkbox, no al crear el elemento.
    checkbox.addEventListener("change", () => {
        // Llamamos a toggleTodoComplete pasándole la tarea de este checkbox.
        onCompleteChange(todo);
    });

    deleteBtn.addEventListener("click", () => {
        // Primero llamamos a deleteTodo para borrar la tarea de los datos del proyecto.
        onDelete(todo);
        // Después quitamos de la pantalla el contenedor de esta tarea.
        container.remove();
    });

    // Agrupamos el título, la fecha, el checkbox y el botón dentro del contenedor.
    container.appendChild(titleElement);
    container.appendChild(date);
    container.appendChild(checkbox);
    container.appendChild(deleteBtn);

    // Mostramos los datos de la tarea y su estado inicial en el checkbox.
    titleElement.textContent = todo.title;
    date.textContent = todo.dueDate;
    checkbox.checked = todo.completed;
    deleteBtn.textContent = "Eliminar";

    
    // Devolvemos el contenedor para que index.js lo añada a la página.
    return container;
}

export function createTodoForm(onAddTodo) {
    const form = document.createElement("form");
    const titleInput = document.createElement("input");
    const description = document.createElement("textarea");
    const date = document.createElement("input")
    const priority = document.createElement("select");
    const submitBtn = document.createElement("button");

    titleInput.type = "text";
    date.type = "date"
    submitBtn.type = "submit";
    submitBtn.textContent = "Añadir tarea";

    const highOption = document.createElement("option");
    highOption.value = "alta";
    highOption.textContent = "Alta";

    const mediumOption = document.createElement("option");
    mediumOption.value = "media";
    mediumOption.textContent = "Media";

    const lowOption = document.createElement("option");
    lowOption.value = "baja";
    lowOption.textContent = "Baja";

    priority.appendChild(highOption);
    priority.appendChild(mediumOption);
    priority.appendChild(lowOption);
    

    form.appendChild(titleInput);
    form.appendChild(description);
    form.appendChild(date);
    form.appendChild(priority);
    form.appendChild(submitBtn);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (titleInput.value.trim() === "") {
            return;
        }
        onAddTodo(titleInput.value, description.value, date.value, priority.value);
        titleInput.value = "";
        description.value = "";
        date.value = "";
        priority.value = "alta";
        titleInput.focus();
    });

    return form;
}

export function generalContainer() {
    const container = document.createElement("div");
    

    return container;
}

export function createProjectForm(onAddProject) {

    const form = document.createElement("form");
    const titleInput = document.createElement("input");
    const submitBtn = document.createElement("button");

    titleInput.type = "text";
    submitBtn.type = "submit"

    submitBtn.textContent = "Añadir Proyecto";

    form.appendChild(titleInput);
    form.appendChild(submitBtn);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (titleInput.value.trim() === "") {
            return;
        }
        onAddProject(titleInput.value);
    })

    return form;
}