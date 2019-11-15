const btnCifra = document.getElementById("cifrar");

btnCifra.addEventListener("click",()=> {
    const letras = document.getElementById("txt").value;
    const chooseNumber = document.getElementById("offset").value;
    console.log(letras);
    const chooseOffset = parseInt(chooseNumber);
    const res = window.cipher.encode(letras, chooseOffset);
    const cifrado = document.getElementById("parrafo");
    cifrado.innerHTML = res; 
    //propiedad para acceder al html y le cambia el valor interno
});

const btnDecifra = document.getElementById("descifrar");

btnDecifra.addEventListener("click",() => {
    const letras = document.getElementById("txt").value;
    const chooseNumber = document.getElementById("offset").value;
    //const letrasTransformadas = letras.toUpperCase();
    console.log(letras);
    const chooseOffset = parseInt(chooseNumber);
    const decipher = window.cipher.decode(letras, chooseOffset);
    const textFinal = document.getElementById("parrafo");
    textFinal.innerHTML = decipher; 
});

const btnReset = document.getElementById("resetear");
btnReset.addEventListener("click",() => {
    const letras = document.getElementById("txt");
    console.log(letras);
    letras.value= " "; 
    const textFinal = document.getElementById("parrafo").innerHTML = " ";
    console.log(textFinal);
});