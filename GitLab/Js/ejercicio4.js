//Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y
//mostrar el número más grande entre los números ingresados

const num = prompt("Ingrese una serie de números separados por comas: ", '');

const numCadenas = num.split(',');

let numGrande = parseInt(numCadenas[0]);;

for (let i = 0; i < numCadenas.length; i++) {
    const numero = parseInt(numCadenas[i]);
    if (numero > numGrande) {
        numGrande = numero;
    }
}
alert("El número más grande es: " + numGrande);