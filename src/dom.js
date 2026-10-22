//Crear elementos HTML

export function createProjectElement(project) {

    const projects = document.createElement("h1");
    projects.textContent = project.name;

    return projects;
}

export function createTodoElement(todo, onCompleteChange) {
    
    const container = document.createElement("div");
    const titleElement = document.createElement("h3");
    const date = document.createElement("p");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        onCompleteChange(todo);
    });

    container.appendChild(titleElement);
    container.appendChild(date);
    container.appendChild(checkbox);

    titleElement.textContent = todo.title;
    date.textContent = todo.dueDate;
    checkbox.checked = todo.completed;

    
    return container;
}