export function crearElementoProyecto(proyecto) {

    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = proyecto.nombre;

    return nuevoParrafo;

}