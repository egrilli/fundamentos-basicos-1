// 7) Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function oddArr(hasta) {

  let oddarray = [];

  for (let i = 1; i <= hasta; i++) {
    if (i % 2 !== 0) {
      oddarray.push(i);
    }
  }
 return oddarray;
}

var resultado = oddArr(50);
console.log(resultado);