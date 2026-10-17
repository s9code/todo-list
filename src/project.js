export function projects(name) {
    return {
        name,
        todos: []
    };
}

export function addTodoProject(project, todo) {
    project.todos.push(todo);
};