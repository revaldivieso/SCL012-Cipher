window.cipher = {
  encode: (palabras, chooseOffset) => {
    let resultado = "";
    // almacena el valor del string cifrado
    for (let i = 0; i < palabras.length; i++) {
      palabras.charCodeAt(i);
      const letra = palabras.charCodeAt(i);
      //representa el numero de la letra en el codigo ASCII
      console.log(letra);

      if (letra >= 65 && letra <= 90) {
        //valor unicode de letras mayusculas en ASCII
        let codAsciiCifrado = (letra - 65 + chooseOffset) % 26 + 65;
        //formula de cifrado cesar: obtener nuevo numero de letra en el codigo ASCII
        nuevoAscii = String.fromCharCode(codAsciiCifrado)
        //obtener el valor de la letra cifrada
        resultado += nuevoAscii; //formar el string cifrado 
        console.log(resultado)
      } else if (letra >= 97 && letra <= 122) {
        //vaLor unicod de letras minusculas en ASCII
        codAsciiCifrado = (letra - 97 + chooseOffset) % 26 + 97;
        nuevoAscii = String.fromCharCode(codAsciiCifrado)
        resultado += nuevoAscii;
      } else {
        resultado += String.fromCharCode(letra);
        //retorna el valor plano
      }
    }
    return resultado; // retorna el valor de la letra cifrada  
  },

  decode: (palabras, chooseOffset) => {
    let resDecipher = "";
    for (let i = 0; i < palabras.length; i++) {
      palabras.charCodeAt(i);
      const letra = palabras.charCodeAt(i);
      console.log(resDecipher);
      if (letra >= 65 && letra <= 90) {
        let codAsciiDecifrado = (letra + 65 - chooseOffset) % 26 + 65; // formula para descifrar mayusculas
        nuevoAscii = String.fromCharCode(codAsciiDecifrado); // obtener el valor de la letra descifrada
        resDecipher += nuevoAscii; // formar la cadena descifrada     
      } else if (letra >= 97 && letra <= 122) {
        codAsciiDecifrado = (letra + 97 - chooseOffset) % 26 + 97; // descifra minusculas
        nuevoAscii = String.fromCharCode(codAsciiDecifrado);
        resDecipher += nuevoAscii;
      } else {
        resDecipher += String.fromCharCode(letra);
        //retorna el valor plano
      }
    }
    return resDecipher; // retorna el valor de la letra decifrada 
  }
}
