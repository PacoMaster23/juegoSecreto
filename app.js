let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);


    console.log(numeroIntentos);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en  ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez ' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        //el usuario no acerto

        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numoero secreto es menor');

        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');

        }
        numeroIntentos++;
        limpiarCaja();
    }


    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento ('p','ya se sortearon los numeros posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    // SI EL NUMERO GENERADO ESTA EN LA LISTA 




}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Mete un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros 
    // genera el numero aleatorio 
    // inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();