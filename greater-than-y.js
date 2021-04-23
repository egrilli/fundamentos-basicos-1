// 8) Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.Por ejemplo, si arr = [1, 3, 5, 7] y Y = 3, tu función devolverá 2(hay 2 números en el array mayores que 3, esto son 5 y 7).

function mayorQue(y) {

  
  let arr = [2, 31, 67, 100, 23];
  let contador = 0;

  for (let i = 0; i < arr.length; i++) {
    if (y < arr[i]) {
      contador = contador + 1;
      console.log(arr[i] + " es mayor que " + y);
    }
  }
  console.log("Hay " + contador + " numeros mayores que " + y);
  return contador;
  
}

var resultado= mayorQue(63);


