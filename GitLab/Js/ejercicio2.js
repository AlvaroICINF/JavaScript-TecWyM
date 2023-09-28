//Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
//luego contar cuántas palabras hay en la oración. Mostrar la oración ingresada y el número
//de palabras en el navegador.

const oracion = prompt('Ingresa una Oración: ', '');

const palabras = oracion.split(" ");

let numPalabras = 0;

alert(`La Oración ingresada fue: ${oracion}`);

alert(`El Número de palabras es: ${palabras.length}`);

