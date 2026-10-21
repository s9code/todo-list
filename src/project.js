//Gestión de proyectos

export function projects(name) {
    return {
        name,
        todos: []
    };
}

export function addTodoProject(project, todo) {
    project.todos.push(todo);
}

export function removeTodoProject(project, todo) {
    const index = project.todos.indexOf(todo);

    if(index !== -1) {
        project.todos.splice(index, 1);
    }
}

