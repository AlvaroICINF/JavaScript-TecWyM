//Crear un programa que solicite al usuario una contraseña y verifique si cumple con ciertos
//criterios de seguridad. La contraseña debe cumplir con los siguientes requisitos para
//considerarse válida:
    //a. Debe tener al menos 8 caracteres de longitud.
    //b. Debe contener al menos una letra mayúscula.
    //c. Debe contener al menos un número.
    //d. Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\-
//Se debe mostrar un mensaje en el navegador indicando si la contraseña ingresada es válida
//o no, según los criterios mencionados. Si la contraseña cumple con todos los criterios, se
//mostrará un mensaje de "La contraseña es válida". De lo contrario, se mostrará un mensaje
//que indica que la contraseña no cumple con los requisitos de seguridad.

function verificarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(contrasena)) {
        return false;
    }

    if (!/\d/.test(contrasena)) {
        return false;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(contrasena)) {
        return false;
    }

    return true;
}

var contrasena = prompt("Ingrese una contraseña que cumpla con los siguientes requisitos:\n" +
                        "- Debe tener al menos 8 caracteres de longitud.\n" +
                        "- Debe contener al menos una letra mayúscula.\n" +
                        "- Debe contener al menos un número.\n" +
                        "- Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\\-", '');
while (!verificarContrasena(contrasena)) {
    alert("La contraseña no es valida, no cumple con los requisitos de seguridad");
    contrasena = prompt("Ingrese una contraseña que cumpla con los siguientes requisitos:\n" +
                        "- Debe tener al menos 8 caracteres de longitud.\n" +
                        "- Debe contener al menos una letra mayúscula.\n" +
                        "- Debe contener al menos un número.\n" +
                        "- Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\\-", '');
}         

alert("La contraseña es válida.");