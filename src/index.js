import { todo } from "./todo.js";
import { projects } from "./project.js";
import { addTodoProject } from "./project.js";

const tarea1 = todo("javascript", "javascript en Top", "2026-10-02", "alta");
const tarea2 = todo("bucles", "bucles en top", "2026-02-04", "alta");

const general = projects("General");

addTodoProject(general, tarea1);

addTodoProject(general, tarea2);

console.log(general);