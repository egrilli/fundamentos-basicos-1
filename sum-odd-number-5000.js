// 3) Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).


function odd5000(hasta) {

  let sum = 0;

  for (let i = 1; i <= hasta; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

var resultado =odd5000(5000);
console.log(resultado);
