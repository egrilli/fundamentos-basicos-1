// 9) Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function squares(arr) {

  let newArr = []
  let agregador = 0

  for (let i = 0; i < arr.length; i++) {
    agregador = arr[i] * arr[i];
    newArr.push(agregador);

  }
    return newArr;

}


var resultado =squares([2, 3, 4, 5, 6, 7]);
console.log(resultado);