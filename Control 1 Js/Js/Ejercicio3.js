function validezDeNombre(nombre){
    let ultimoindex=nombre[nombre.length-1]
    if (nombre.length>=6){
        return false;
    }else if(!/[a-z]/.test(nombre) && !/[A-Z]/.test(nombre)){
        return false;
    }else if(!/\d/.test){
        return false;
    }else if (!/[a-zA-Z]/.test(nombre[0])){
        return false;
    }else if(!/\d/.test(ultimoindex)){
        return false;
    }
    return true;
}

let txt=prompt('Ingrese su nombre de usuario\n'+
            'a. Debe tener al menos 6 caracteres de longitud\n'+
            'b. Debe contener letras (mayúsuculas y minúsculas) además de números\n'+
            'c. Debe comenzar con una letra y terminar con un número');
let nameUser=validezDeNombre(txt);

while (!validezDeNombre(txt)) {
    alert("El nombre de usuario no es valida, no cumple con los criterios de validez");
    contrasena = prompt("Ingrese un nombre de usuario válido:\n" +
    'a. Debe tener al menos 6 caracteres de longitud\n'+
    'b. Debe contener letras (mayúsuculas y minúsculas) además de números\n'+
    'c. Debe comenzar con una letra y terminar con un número');
}         

alert("El nombre de usuario es válido");