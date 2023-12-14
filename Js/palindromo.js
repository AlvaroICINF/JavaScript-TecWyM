function esPalindromo(palabra) {
    // Eliminar espacios y convertir a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas.
    palabra = palabra.toLowerCase().replace(/ /g, '');
    
    // Comparar la palabra original con su versión invertida.
    const palabraInvertida = palabra.split('').reverse().join('');
    
    return palabra === palabraInvertida;
  }
  
  // Ejemplo de uso:
  const texto = prompt('Ingrese una palabra o frase para determinar si es palindromo');
  if (esPalindromo(texto)) {
    console.log(`"${texto}" es un palíndromo.`);
  } else {
    console.log(`"${texto}" no es un palíndromo.`);
  }
  