//factorial de 10 con break
let n = 10;

function factorial(n){
    let respuesta = 1;
    let i=1;
        while(i>=1) {
            respuesta = respuesta * i;
            i++;
            if(i>n) {
                break;
            }
        }
        return respuesta;
    
  }
respuesta = factorial(n);
console.log("El factorial de " + n + " es " + respuesta);