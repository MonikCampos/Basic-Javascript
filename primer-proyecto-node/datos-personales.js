let nombre = "Mónica Campos";
let edad = 44;
let desarrollador = true;
const fechanac = new Date("10-14-1977");
const libro = {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J. K. Rowling",
    fecha: new Date("6-26-1997"),
    url: "https://es.wikipedia.org/wiki/Harry_Potter_y_la_piedra_filosofal"
}

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Eres desarrollador?: " + desarrollador);
console.log("Fecha de Nacimiento: " + fechanac);
console.log("Mi libro favorito: " + libro.titulo + " - Autor: " + libro.autor + " - Fecha:" + libro.fecha + " - Url: " + libro.url);