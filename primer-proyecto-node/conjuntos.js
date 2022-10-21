//Enunciado del ejercicio1:
//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//- Un nuevo Set con los nombres de tu familia
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const arrayFamilia = ["Rocio","Matias","Marta","Hector","Monica"]
const setFamilia = new Set(arrayFamilia)
console.log(setFamilia)

setFamilia.add("Monica")
console.log(setFamilia)

setFamilia.add("JavaScript")
console.log(setFamilia)