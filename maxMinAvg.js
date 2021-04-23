//11)Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvg(arr){

  let newArr=[]

  let max= Math.max(... arr);
  newArr.push(max);
  let min= Math.min(...arr);
  newArr.push(min);
  let suma= arr.reduce(function(num1,num2){ return num1 +num2});
  
  let avg = suma/arr.length;
  newArr.push(avg);

  return newArr;


}

var resultado= maxMinAvg([2,3,4,5]);
console.log(resultado);