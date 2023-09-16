//Crear un algoritmo capaz de solicitar 3 notas de un alumno por pantalla y obtener el promedio ponderado. 
//Este promedio ponderado es de la siguiente forma: Nota 1 = 40% Nota 2 = 30% Nota 3 = 30%
//Si el estudiante obtiene un promedio inferior a 3.95 se debe imprimir por pantalla que ha reprobado la asignatura, 
//si obtuvo un promedio entre 3.95 a 4.94 el estudiante va a examen. Si la
//nota es igual o superior a 4.95 el alumno se exime de la asignatura.

info=confirm("Ingresa tus 3 notas para calcular el promedio de la asignatura. Ejemplo: 3.5,6.82,5.6.");
nota1=prompt("Ingresa tu primera nota que vale un 40%: ");
nota2=prompt("Ingresa tu primera nota que vale un 30%: ");
nota3=prompt("Ingresa tu primera nota que vale un 30%: ");
prom=((nota1*0.4)+(nota2*0.3)+(nota3*0.3)).toFixed(2);
if (prom<3.95){
    alert(`Haz reprobado la asignatura con un ${prom}.`);
}else if (prom>=3.95 && prom<4.95) {
    alert(`Tu promedio final es ${prom}, irás a examen`);
}else if(prom>=4.95){
    alert(`Felicidades, tu promedio es ${prom} te haz eximido de la asignatura`);
}else{
    alert("Los datos ingresados no son números");
}