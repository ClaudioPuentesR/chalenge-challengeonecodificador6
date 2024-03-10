document.getElementById("encriptar").addEventListener("click", function() {
    var texto = document.getElementById("texto").value;
    var textoEncriptado = encriptarTexto(texto);
    document.getElementById("resultado").innerText = textoEncriptado;
});

document.getElementById("desencriptar").addEventListener("click", function() {
    var textoEncriptado = document.getElementById("texto").value;
    var textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.getElementById("resultado").innerText = textoDesencriptado;
});

function encriptarTexto(texto) {
    var textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    var textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                           .replace(/imes/g, "i")
                                           .replace(/ai/g, "a")
                                           .replace(/ober/g, "o")
                                           .replace(/ufat/g, "u");
    
    return textoDesencriptado;
}
