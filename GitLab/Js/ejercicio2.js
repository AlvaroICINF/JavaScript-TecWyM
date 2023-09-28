//Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
//luego contar cuántas palabras hay en la oración. Mostrar la oración ingresada y el número
//de palabras en el navegador.

const oracion = prompt('Ingresa una Oración: ', '');

const palabras = oracion.split(" ");

let numPalabras = 0;

for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    if (palabra.trim() !== "") {
        numPalabras++;
    }
}

alert(`La Oración ingresada fue: ${oracion}`);

alert(`El Número de palabras es: ${numPalabras}`);

//document.write("<p>La Oración ingresada es: " + oracion + "</p>");

//document.write("<p>El Número de palabras es: " + numPalabras + "</p>");