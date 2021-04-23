// 4) Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function sumArr(arr) {


  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

}


var resultado= sumArr([1, 1, 1, 1, 1, 1, 2]);
console.log(resultado);