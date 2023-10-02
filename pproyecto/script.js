const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".txt");
const $btn = document.getElementsByClassName('btnCopiar');
const $copiar = document.getElementsByClassName('txt');


// `La letra "e` es convertida para "enter"`
// `La letra "i` es convertida para "imes"`
// `La letra "a` es convertida para "ai"`
// `La letra "o` es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function btnEncriptador(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(StringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(StringEncriptado.includes(matrizCodigo[i][0])){
            StringEncriptado = StringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringEncriptado
}

function btnDesencriptador(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(StringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringDesencriptado = StringDesencriptado.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(StringDesencriptado.includes(matrizCodigo[i][1])){
            StringDesencriptado = StringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return StringDesencriptado
}

function btnCopiar() {
    let copiar=document.getElementsByClassName('txt');
    let botonCopiar=document.getElementsByClassName('btnCopiar');

    navigator.clipboard.writeText(copiar.textContent);
    botonCopiar.textContent='Copiado';
}


