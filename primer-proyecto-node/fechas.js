//Enunciado del ejercicio3:
//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//- La fecha de hoy
//- La fecha de tu nacimiento
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
//- Una variable que contenga el día de tu nacimiento
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const fechaHoy =  new Date()
console.log(fechaHoy)

const fechaNac = new Date(1977,9,14)
console.log(fechaNac)

const esMayor = (fechaHoy.getTime()>fechaNac.getTime())
console.log(esMayor)

const diaNac = fechaNac.getDate()
const mesNac = fechaNac.getMonth() + 1
const anioNac = fechaNac.getFullYear()

console.log(diaNac)
console.log("Nacimiento Día:" + diaNac + "-Mes:" + mesNac + "-Año:" + anioNac)