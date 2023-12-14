/*Escribe una función que tome un arreglo de números como entrada y 
devuelva la suma de todos los elementos en el arreglo. */

function sumaDeNumerosArreglo(arreglo) {
    let sumatotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
      let num = arreglo[i];
      sumatotal += num;
    }
    return sumatotal;
  }
  
  let sum = sumaDeNumerosArreglo([1, 2, 3, 4, 5]);
  alert(sum);
  