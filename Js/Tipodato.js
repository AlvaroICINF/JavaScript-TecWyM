//Numbers
let edad=20;
let sueldo=1200000;
const PI=3.14;

const n_grande=1e6;//1 millón
const n_pequeno=1e-6;//0.000001

//BigInt
const bigInt=1232123243134131341398765678941342213n;
console.log(bigInt);

//Infinity
console.log(edad/0);
console.log(Infinity);

//texto a numero
console.log("2"/2);

//booleans
let V=true;
let F=false;

//ciclo
if (V){
    console.log("Es verdadero");
}else {
    console.log("Es falso");
}

//Null

console.log('#################NULL##############')
let numero_nuevo=null;
console.log(numero_nuevo);

//formas de crear objeto 
let user=new Object();
let user1={};

let usuario={
    name:'Mateo',
    age:30,
    city:'Osorno',
    "correo electronico": "mateo@gmail.com"
};

//añadir propiedad al objeto
usuario.provincia="Provincia de osorno"
usuario.genero="Masculino"

//llamar a objeto o a una propiedad
console.log(usuario);
console.log(usuario["coreeo electronico"]);

//eliminar propiedad

delete usuario.provincia;
console.log(usuario);

//tipo de dato
console.log(typeof edad);
//transformar tipo de dato
edad=String(edad); //'String' para cambiar la variable de tipo de dato number a string
console.log(edad)
console.log(typeof edad);

