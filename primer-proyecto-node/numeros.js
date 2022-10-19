//Una variable que contenga tu altura en centímetros (entero)
let alturaInt=160.6;
console.log("Altura en centimetros entero: " + parseInt(alturaInt)); //en el caso de tener decimales, forzar a que muestre un entero

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturaFloat=1.63;
console.log("Altura en mtrs en coma flotante: " + parseFloat(alturaFloat)); //forzar a que muestre un nro en coma flotante

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoFloat=72.67;
console.log("Peso en Kg en coma flotante: " + parseFloat(pesoFloat)); //forzar a que muestre un nro en coma flotante

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRoundUp = Math.ceil(alturaInt);
console.log("Redondeo hacia arriba de la altura: " + alturaRoundUp); 

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRoundDown = Math.floor(pesoFloat);
console.log("Redondeo hacia abajo del peso: " + pesoRoundDown ); 

//Una variable que contenga si "el máximo valor que se puede obtener en Javascripnode 
let maximoValorJS = Number.MAX_VALUE;
console.log("Máximo valor en JS: " + maximoValorJS); 