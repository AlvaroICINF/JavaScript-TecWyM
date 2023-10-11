
function contarletra() {
    let frase = prompt('Ingrese una frase');
    let letra=  prompt('Ingrese una letra para determinar cuantas veces está en la frase');
    frase = frase.toLowerCase();
    
    let contador = 0;
    
    for (let i = 0; i < frase.length; i++) {
      const caracter = frase.charAt(i);
      if (caracter==letra) {
        contador++;
      }
    }
    if (contador==1){
        alert(`La cantidad de ${letra} en la frase ${frase} es de ${contador} ves`);
    }else{
        alert(`La cantidad de ${letra} en la frase ${frase} es de ${contador} veces`);
    }
    
  }
  
contarletra();
  
  