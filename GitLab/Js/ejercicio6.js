//Desarrollar un algoritmo que permita ingresar un objeto representando un inventario de
//productos. Cada producto en el inventario debe tener como propiedades un nombre, un
//precio, y una cantidad de stock en formato de número entero. Se debe recorrer el inventario
//y verificar si el stock de alguno de los productos es inferior a 1000 unidades. Si existe algún
//producto con stock crítico (menos de 1000 unidades), mostrará un mensaje indicando cuál
//es ese producto y que el stock es crítico. Si todos los productos tienen un stock igual o
//superior a 1000 unidades, el programa mostrará un mensaje que indique que el inventario
//está en buen estado.
///////////////////////////////////////////////////////////////////////////////////////////////////////

let inventario=[];//Crearemos un arreglo para almacenar los productos


//Ahora una función para representar cada producto que se pueda ingresar.      
function productos(){                   
    let product={};

    product.nombre=prompt('Nombre: ');
    product.precio=prompt('Precio: ');
    product.stock=prompt('cantidad: ');

    inventario.push(product);
}

//Debemos ingresar los productos. Primero determinaremos cuantos deseamos ingresar.
const ingreso = prompt('¿Cuántos productos deseas ingresar?: ', 1);

for (let i = 0; i < ingreso; i++) {
  productos();
}


//luego de haberlos ingresados, recorreremos el arreglo donde se encuentra los productos para saber
//si existe alguno en estado crítico
let critic=[]
for (let i=0; i<inventario.length;i++){
    let producto= inventario[i];
    let nombre= producto.nombre;
    let cant=producto.stock;
    let cont=0
    if (cant<1000){
        critic.push(nombre);
        //alert(`el stock de ${nombre} es crítico`); *OPCIONAL*
        cont+=1
    }
}
let critico=critic.join(', ');
if (cont=0){
    alert('El inventario se encuentra en buen estado con los productos con buen stock.');
}else{
    alert(`Los productos en estádo crítico (Stock menor a 1000 unidades) son: ${critico}`);
}