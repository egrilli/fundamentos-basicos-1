// 12) Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function changeArr(arr) {

  let temp = arr[0];
  arr[0] =arr[arr.length-1];
  arr[arr.length-1] = temp;
  
  return arr;

}

var resultado = changeArr([2, 3, 6, 2, 4, 67]);
console.log(resultado);