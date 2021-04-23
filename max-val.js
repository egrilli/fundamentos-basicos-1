// 5) Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function maxVal(arr) {

  return Math.max(...arr);
}


var resultado = maxVal([2,333,213213,5,-2,3,-4]);

console.log("El valor mayor es : " +resultado)