//factorial de 10 con for
let n = 10;

function factorial(n){
    let respuesta = 1;
    let i=1;
        while(i>=1 && i<n+1) {
            respuesta = respuesta * i;
            i++;
        }
    return respuesta  ;
  }

respuesta = factorial(n);
console.log("El factorial de " + n + " es " + respuesta);