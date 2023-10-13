function calculadoraDeImc() {
    let cod=document.getElementById('replace');
    let nombre=(document.getElementById('nombre').value);
    let peso=parseFloat(document.getElementById('peso').value);
    let altura=parseFloat(document.getElementById('altura').value);
    let nivelActividad = document.getElementById('actividad').value;
    
    let imc=peso/(altura*altura);
    let estado=clasificacionDelImc(imc);
    let actividadfisica=actividadFisica(nivelActividad);
    let gastoenergetico=actividadfisica*peso;
    let estadonutricional=estadoNutricional(imc);

    const txt = `
    <h2>Resultados para ${nombre}</h2>
    <p>IMC: ${imc.toFixed(2)}</p>
    <p>Clasificación: ${estado}</p>
    <p>Gasto Energético diario: ${gastoenergetico.toFixed(2)} kcal </p>
    <p>Estado nutricional: ${estadonutricional}</p>`;


    cod.innerHTML=txt;
}

function clasificacionDelImc(imc){
    if (imc<18.5){
        return 'Se encuentra en bajo peso ';
    }else if (imc>18.4 && imc<25){
        return 'Su nivel de peso es normal';
    }else if (imc>24.9 && imc<30){
        return "Se encuentra en sobrepeso ";
    }else if (imc>=30){
        return "Se encuentra con obesidad ";
    }
}

function actividadFisica(nivelactividad) {
    switch (nivelactividad) {
        case "Sedentario":
            return 1.2;
        case "Moderado":
            return 1.55;
        case "Activo":
            return 1.9;
        default:
            return 'no se registró actividad física'; 
    }
}

function estadoNutricional(imc){
    if (imc<18.5){
        return 'Necesita atención especializada';
    }else if (imc>18.4 && imc<25){
        return 'Estado nutricional adecuado';
    }else if (imc>24.9 && imc<30){
        return 'Necesita atención especializada';
    }else if (imc>=30){
        return 'Necesita atención especializada';
    }
}

function limpiar() {
    document.getElementById('IMC').reset();
    document.getElementById('genero').value='Hombre';
    document.getElementById('actividad').value='Sedentario';
    document.getElementById('replace').innerHTML = '';
}