//Crear elementos HTML

export function createProjectElement(project) {

    const projects = document.createElement("h1");
    projects.textContent = project.name;

    return projects;
}

export function createTodoElement(todo) {
    const container = document.createElement("div");
    const todos = document.createElement("h3");
    const date = document.createElement("p");

    container.appendChild(todos);
    container.appendChild(date);

    todos.textContent = todo.title;
    date.textContent = todo.dueDate;
    
    return container;
}