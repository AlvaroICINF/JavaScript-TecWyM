console.log('\n############################ FUNCIÓN BÁSICA ###################')
function mostrarMensaje(){
    alert('¡Hola a todos!');
}

mostrarMensaje();

console.log('\n########################### VARIABLES ###########################')
function varInterna(){
    let mensaje='Hola ...................';
    alert(mensaje);
}

console.log('\n########################### VARIABLES EXTERNAS ###########################');
let nombre='Alvaro';
function mostrarNombre(){
    let msj='Hola'+ nombre;
    alert(msj);
}
mostrarNombre();

let institucion='Ulagos';
function mostrarInstitucion(){
    let institucion= "Universidad de los lagos";
    let texto ='Yo estudio en la'+ institucion;
    alert(texto);
}

mostrarInstitucion();
alert(institucion);

