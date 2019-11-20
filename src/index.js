const btnCifra = document.getElementById("cifrar");

btnCifra.addEventListener("click",() => {
    let letras = document.getElementById("txt").value;
    let chooseNumber = document.getElementById("offset").value;
    let chooseOffset = parseInt(chooseNumber);
    let res = window.cipher.encode(letras, chooseOffset);
    let cifrado = document.getElementById("parrafo");
    cifrado.innerHTML = res; 
    //propiedad para acceder al html y le cambia el valor interno
});

const btnDecifra = document.getElementById("descifrar");

btnDecifra.addEventListener("click",() => {
    let letras = document.getElementById("txt").value;
    let chooseNumber = document.getElementById("offset").value;
    //const letrasTransformadas = letras.toUpperCase();
    let chooseOffset = parseInt(chooseNumber);
    let decipher = window.cipher.decode(letras, chooseOffset);
    let textFinal = document.getElementById("parrafo");
    textFinal.innerHTML = decipher; 
});

const btnReset = document.getElementById("resetear");
btnReset.addEventListener("click",() => {
    let letras = document.getElementById("txt");
    letras.value= " "; 
    let textFinal = document.getElementById("parrafo");
    textFinal.innerHTML = " ";
});