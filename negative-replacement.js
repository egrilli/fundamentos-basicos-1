// 9) Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function ceroRe() {

  let arr = [-2, 3, 24, -2, -3213, -2131, 5, 6, 7, 8, 9, 10, -1]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

var resultado = ceroRe();
console.log(resultado);