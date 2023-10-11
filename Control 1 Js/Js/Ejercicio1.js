function rendimientoLaboral(){
    let puntuacion=prompt('¡Ingrese la calificación de evaluación para conocer el beneficio a recibir!\n'
                        + "Puntuaciones válidas: 0.0 ; 0.2 ; 0.4 ; 0.6 ; 0.8");
    
    let bono=0; //contador del bono a recibir que se actualizará dependiendo el rendimiento

    if (puntuacion==0.2 || puntuacion==0.0){
        bono=350000*0.2;
        alert(`El nivel de rendimiento durante el año fue insuficente. Tu bono es de $${bono}`);

    }else if (puntuacion==0.4){
        bono=350000*0.4;
        alert(`El nivel de rendimiento durante el año fue insuficente. Tu bono es de $${bono}`);

    }else if (puntuacion==0.6){
        bono=350000*0.6;
        alert(`El nivel de rendimiento durante el año fue insuficente. Tu bono es de $${bono}`);

    }else if (puntuacion==0.8){
        bono=350000*0.8;
        alert(`El nivel de rendimiento durante el año fue insuficente. Tu bono es de $${bono}`);

    }else{
        alert('La puntuacion ingresada no corresponde a un nivel de rendimiento válido')
    }
        
    }

rendimientoLaboral();

