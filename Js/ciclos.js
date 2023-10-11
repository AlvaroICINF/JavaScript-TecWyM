console.log('################################WHILE################################');
let i=0;

while(i<=5){
    console.log(i);
    i++;
}
//Ciclo do-while
console.log('\n############################ DO-WHILE #####################');

let aux=0;
do{
    console.log(aux);
    aux++;
}
while (aux<=3);

//Ciclo for
console.log('\n########################### OMISIONES DE PARTES EN FOR ###################');
let j=0;
for (;j<=7;j++){
    console.log(j);
}

for (;j<=7;){
    console.log(j);
}

console.log('\n############################ USO DEL BREAK #########################')
let suma=0;
while (true){
    let valor=+prompt("ingrese un número, porfavor: ")
    if (!valor)break;//quiebre de ciclo
    suma+=valor;
}
alert(`La suma es de: ${suma}`);

console.log('\n########################### USO DEL CONTINUE #########################')
for (let i = 0; i<10; i++){
    if(i%2==0)continue;
    alert(i);
}