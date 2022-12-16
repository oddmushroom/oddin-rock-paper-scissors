let rondaJugador = 0; let rondaComputadora = 0;
const botones = Array.from(document.querySelectorAll('.bot'));
const mensaje = document.querySelector('.mensaje');
const puntajeJugador = document.querySelector('.puntuacion-jugador');
const puntajeComputadora = document.querySelector('.puntuacion-computadora');
const eleccionJugador = document.querySelector('.eleccion-jugador');
const eleccionComputadora = document.querySelector('.eleccion-computadora');

botones.forEach((boton) => boton.addEventListener('click', () => {
    if(rondaJugador >= 5 || rondaComputadora >= 5) {
        return;
    }
    jugar(boton.dataset.afsa);
}));

function nroAleatorio(n){
    return Math.floor(Math.random() * n + 1);
}

function obtEleccionComputadora() {
    let nroComp = nroAleatorio(3);
    let elecComp = '';
    switch(nroComp){
        case 1: elecComp = 'Piedra'; break;
        case 2: elecComp = 'Papel'; break;
        case 3: elecComp = 'Tijeras'; break;
        default: break;
    }
    return elecComp;
}

function jugarRonda(jugadorEleccion, computadoraEleccion) {
    let res = '';

    if (jugadorEleccion === 'Piedra') {
        if (computadoraEleccion === 'Papel') {
            res = 'PIERDES, Piedra < Papel';
        } else if (computadoraEleccion === 'Tijeras') {
            res = 'GANAS, Piedra > Tijeras';
        } else { res = 'EMPATE'; }
    } 

    else if (jugadorEleccion === 'Papel') {
        if (computadoraEleccion === 'Piedra') {
            res = 'GANAS, Papel > Piedra';
        } else if (computadoraEleccion === 'Tijeras') {
            res = 'PIERDES, Papel < Tijeras';
        } else { res = 'EMPATE'; }
    }
    
    else if (jugadorEleccion === 'Tijeras') {
        if (computadoraEleccion === 'Piedra') {
            res = 'PIERDES, Tijeras < Piedra';
        } else if (computadoraEleccion === 'Papel') {
            res = 'GANAS, Tijeras > Papel';
        } else { res = 'EMPATE'; }
}
    return res;
}

function crearParagrafo(texto) {
    const p = document.createElement('p');
    p.textContent = texto;
    return p;
}

function jugar(jugadorElec) {
    let jugadorSeleccion = jugadorElec;
    let computadoraSeleccion = obtEleccionComputadora();
    let rondaResultado = jugarRonda(jugadorSeleccion, computadoraSeleccion);

    if (rondaResultado.search('GANAS') > -1) {
        rondaJugador++;
    } else if (rondaResultado.search('PIERDES') > -1) {
        rondaComputadora++;
    }

puntajeJugador.textContent = rondaJugador;
puntajeComputadora.textContent = rondaComputadora;
mensaje.textContent = rondaResultado;
eleccionJugador.appendChild(crearParagrafo(jugadorSeleccion));
eleccionComputadora.appendChild(crearParagrafo(computadoraSeleccion));

if (rondaJugador >= 5 && rondaComputadora < 5) {
    mensaje.textContent = 'GANASTE!';
}   else if (rondaComputadora >= 5) {
    mensaje.textContent = 'PERDISTE MALASO!';
}
}