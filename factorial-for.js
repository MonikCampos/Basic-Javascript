//factorial de 10 con for
function factorial(n){
    let respuesta = 1;
    for(let i = n; i >= 1; i--){
        respuesta = respuesta * i;
    }
    return respuesta  ;
  }

  let n = 10;
  respuesta = factorial(n);
  console.log("El factorial de " + n + " es " + respuesta);