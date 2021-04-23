// 13) De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function numStr(y) {

  let x = "Dojo"

  for (let i = 0; i < y.length; ++i) {

    if (y[i] < 0) {
      y[i] = x;

    }
  }
  return y;

}


var resultado =numStr([-2, 321, -3, 4, 45, 2, -42131286712]);
console.log(resultado);