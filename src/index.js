import { todo } from "./todo.js";
import { project } from "./project.js";

const tarea1 = todo("javascript", "javascript en Top", "2026-10-02", "alta");
const tarea2 = todo("bucles", "bucles en top", "2026-02-04", "alta");

console.log(tarea1);
console.log(tarea2);

const general = project("General");

general.todos.push(tarea1, tarea2);

console.log(general);