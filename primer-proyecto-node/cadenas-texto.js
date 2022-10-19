//Una cadena de texto con tu Nombre
let nombre="Mónica";
console.log("Nombre: " + nombre);

//Otra cadena de texto con tu Apellido
let apellido="Campos";
console.log("Apellido: " + apellido);

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante=nombre + " " + apellido;
console.log("Estudiante: " + estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus=estudiante.toUpperCase();
console.log("Estudiante en mayúscula: " + estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus=estudiante.toLocaleLowerCase();
console.log("Estudiante en minúscula: " + estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var eLength=estudiante.length;
console.log("Cantidad de letras de la cadena estudiante: " + eLength)

//Una variable que contenga la primera letra del Nombre
var primeraLetra=nombre.substring(0,1);
console.log("Primera letra del Nombre: " + primeraLetra);

//Otra variable que contenga la última letra del Apellido
var ultimaLetra=apellido.substring(apellido.length-1,apellido.length);
console.log("Última letra del Apellido: " + ultimaLetra);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteTrim=estudiante.trim();
console.log("Estudiante sin espacios: " + estudianteTrim);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
var existeNombre=estudiante.includes(nombre);
console.log(`Estudiante contiene el nombre: ${existeNombre}`);