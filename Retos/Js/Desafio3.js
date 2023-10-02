/*Desarrollar un programa en JavaScript que permita calcular la propina en un restaurante. El
programa debe interactuar con el usuario a través de una interfaz sencilla en HTML5.
El programa debe cumplir con los siguientes requerimientos:
1. El usuario podrá ingresar el monto total de la boleta (monto en CLP) en un campo de texto.
2. Deberá existir un menú desplegable donde el usuario pueda seleccionar el porcentaje de
propina deseado (por ejemplo, 10%, 15%, 20%).
3. Al hacer clic en un botón de "Calcular", el programa deberá realizar el cálculo de la propina.
4. El resultado del cálculo de la propina deberá mostrarse en pantalla, indicando el monto de la
propina y el total a pagar incluyendo la propina.
5. El programa debe incluir validaciones para asegurar que el monto de la boleta sea un
número válido y que se seleccione un porcentaje de propina válido*/

function calculadoraDePropina() {
    let costo = parseFloat(document.getElementById('costo').value);
    const porcentajePropina = parseFloat(document.getElementById('porcentaje').value);

    if (isNaN(costo) || costo<=0) {
        alert('Por favor, ingresa un monto válido.');
        return;
    }

    let monto = (costo * porcentajePropina) / 100;
    let montoTotal = costo + monto;

    
    document.getElementById('propina').textContent = monto+' CLP';
    document.getElementById('montoTotal').textContent = montoTotal+' CLP';
}

function limpiar(){
    document.getElementById('calculadora').reset();

}