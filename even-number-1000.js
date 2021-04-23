//2) Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function even1000(hasta) {

  for (let i = 1; i <= hasta; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }

}

var resultado =even1000(1000);
