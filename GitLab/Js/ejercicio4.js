//Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y
//mostrar el número más grande entre los números ingresados

let numEntrada = prompt("Ingrese una serie de números separados por comas: ", '');
while (numEntrada==='') {
    alert("Por favor, ingresa números válidos.");
    numEntrada = prompt('Ingrese una serie de números separados por comas: ', '');
  }

let numCadenas = numEntrada.split(',');

let numGrande = parseFloat(numCadenas[0]);;

for (let i = 1; i < numCadenas.length; i++) {
    let numero = parseFloat(numCadenas[i]);
    if (!isNaN(numero) && numero > numGrande) {
        numGrande = numero;
    }
}
alert(`El número más grande es: ${numGrande}`);