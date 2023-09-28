//Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un ciclo
//para calcular la suma de todos los números pares desde 1 hasta el número ingresado por el
//usuario. Mostrar el resultado de la operación en el navegador.

let numero = prompt('Ingresa un Número: ', '');
  while (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingresa un número válido.");
    numero = prompt('Ingresa un Número: ', '');
  }

var suma = 0;
    
for (var i=1; i<=numero; i++){
    if (i%2 == 0) {
        suma += i;
        }
}
alert(`La sumatoria es de los números pares es: ${suma}`);