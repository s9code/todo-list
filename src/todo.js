export function todo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false
    };
}

export function updateTodo(todo, newTitle, newDescription, newDueDate, newPriority) {
    todo.title = newTitle;
    todo.description = newDescription;
    todo.dueDate = newDueDate;
    todo.priority = newPriority;
}

export function toggleTodoComplete(todo) {
    todo.completed = !todo.completed;
}