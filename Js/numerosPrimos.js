function esPrimo(numero) {
    if (numero <= 1) {
      return false; // Los números menores o iguales a 1 no son primos.
    }
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false; // Si es divisible por algún número diferente de 1 y sí mismo, no es primo.
      }
    }
    
    return true; // Si no se encontraron divisores, es primo.
  }
  
  // Ejemplo de uso:
  let numero = prompt('Ingrese un número para determinar si es primo');
  if (esPrimo(numero)) {
    alert(`${numero} es un número primo.`);
  } else {
    alert(`${numero} no es un número primo.`);
  }
  