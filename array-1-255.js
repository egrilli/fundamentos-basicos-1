//1) Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function ejercicio1(hasta) {

  let arr = []

  for (let i = 1; i <= hasta; i++) {

    arr.push(i);
  }

  return arr;

}

var resultado = ejercicio1(255);
console.log(resultado)
