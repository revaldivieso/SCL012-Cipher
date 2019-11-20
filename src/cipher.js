window.cipher = {
  encode: (palabras, chooseOffset) => {
    let resultado = "";
    // almacena el valor del string cifrado
    for (let i = 0; i < palabras.length; i++) {
      palabras.charCodeAt(i);
      const letra = palabras.charCodeAt(i);
      //representa el numero de la letra en el codigo ASCII
      if (letra >= 65 && letra <= 90) {
        //valor unicode de letras mayusculas en ASCII
        let codAsciiCifrado = (letra - 65 + chooseOffset) % 26 + 65;
        //formula de cifrado cesar: obtener nuevo numero de letra en el codigo ASCII
        let nuevoAscii = String.fromCharCode(codAsciiCifrado);
        //obtener el valor de la letra cifrada
        resultado += nuevoAscii; //formar el string cifrado 
      } else if (letra >= 97 && letra <= 122) {
        //vaLor unicod de letras minusculas en ASCII
        let codAsciiCifrado = (letra - 97 + chooseOffset) % 26 + 97;
        let nuevoAscii = String.fromCharCode(codAsciiCifrado);
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
      let letra = palabras.charCodeAt(i);
      if (letra >= 65 && letra <= 90) {
        let codAsciiDecifrado = (letra - 90 - chooseOffset) % 26 + 90; // formula para descifrar mayusculas
        let nuevoAscii = String.fromCharCode(codAsciiDecifrado); // obtener el valor de la letra descifrada
        resDecipher += nuevoAscii; // formar la cadena descifrada     
      } else if (letra >= 97 && letra <= 122) {
        let codAsciiDecifrado = (letra - 122 - chooseOffset) % 26 + 122; // descifra minusculas
        let nuevoAscii = String.fromCharCode(codAsciiDecifrado);
        resDecipher += nuevoAscii;
      } else {
        resDecipher += String.fromCharCode(letra);
        //retorna el valor plano
      }
    }
    return resDecipher; // retorna el valor de la letra decifrada 
  }
}