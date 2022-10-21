//Enunciado del ejercicio2:
//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
//- Una variable que obtenga tu edad a partir del objeto anterior
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const Monica = {
    nombre: "Monica",
    apellido: "Campos",
    edad: 45,
    altura: 1.60,
    eresDesarrollador: true
}
console.log(Monica)

const miEdad = Monica.edad
console.log(miEdad)

const listaAmigos = [
    ...Monica,
    { nombre: "Lorena", apellido:"Cervetti", edad:44, altura:1.75, eresDesarrollador: false },
    { nombre: "Rita", apellido:"Pereyra", edad:47, altura:1.67, eresDesarrollador: false },
]
console.log(listaAmigos)

const listaAmigosOrd = listaAmigos.sort((a,b) => b.edad - a.edad)
console.log(listaAmigosOrd)