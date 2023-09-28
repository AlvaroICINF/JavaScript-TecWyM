//Realizar un programa que permita al usuario ingresar su estatura y peso, para que se
//muestre en el navegador su IMC correspondiente. Además de mostrar el IMC, indicar si está
//en la categoría de: “Bajo Peso”, “Peso Normal” o “Sobrepeso”.

function CalcularIMC(estatura, peso) {

    let estaturaCuad= estatura ** 2;
    let indiceMasaCorporal= peso / estaturaCuad;
    
    if(indiceMasaCorporal < 18.5){
        return `Ud se encuentra en bajo peso, su imc es: ${indiceMasaCorporal.toFixed(2)}`;

    } else if(indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9){
        return `Ud se encuentra en peso normal, su imc es: ${indiceMasaCorporal.toFixed(2)}`;

    } else if(indiceMasaCorporal > 24.9){
        return `Ud se encuentra en sobrepeso, su imc es: ${indiceMasaCorporal.toFixed(2)}`;

    }
}

let estatura=parseFloat(prompt("Ingrese su estatura en centimetros: ")) / 100;
while (isNaN(estatura) || estatura <= 0.5 || estatura >= 2.70) {
    alert("La estatura no es valida.");
    estatura = parseFloat(prompt("Ingrese su estatura en centimetros: ")) / 100;
  }

let peso=parseFloat(prompt("Ingrese su peso en kilogramos: "));
while (isNaN(peso) || peso <=3 || peso >= 600) {
    alert("El peso no es valido");
    peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
  }

let resultado = CalcularIMC(estatura, peso);
alert(resultado);