let rondaJugador = 0; let rondaComputadora = 0;
const botones = Array.from(document.querySelectorAll('.bot'));
const mensaje = document.querySelector('.mensaje');
const puntajeJugador = document.querySelector('.puntuacion-jugador');
const puntajeComputadora = document.querySelector('.puntuacion-computadora');
const eleccionJugador = document.querySelector('.eleccion-jugador');
const eleccionComputadora = document.querySelector('.eleccion-computadora');

botones.forEach((boton) => boton.AddEventListener('click', () => {
    if (rondaComputadora >= 5 || rondaJugador >=5){
    return;}
jugar(boton.data.afsa);
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