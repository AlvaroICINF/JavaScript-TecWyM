//Realizar un programa en JavaScript con lo aprendido en clases
//que permita ingresar un número por pantalla y saber si es un
//número par o número impar.
let num=prompt("Ingresa un número para determinar si es par o no: ",0);
if (num%2===0){
    alert(`el número ${num} es par`);
}else if (num%2===1){
    alert(`el número ${num} es impar`);
}else{
    alert(`El valor ${num} no es un número`);
}