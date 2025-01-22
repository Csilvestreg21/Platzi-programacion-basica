//Variables globales del juego
const botonMascotas = document.getElementById("boton-mascotas");
const seleccionMascota = document.getElementById("seleccionar-mascota");
const seleccionarAtaque = document.getElementById("seleccionar-ataque");
const tableroResultados = document.getElementById("tablero-resultados");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");
const mensaje = document.getElementById("mensajes");
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Funcion que inicia el juego
function iniciarJuego() {
    //deshabilitar seccion de ataque al iniciar el juego
    let sectionseleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionseleccionarAtaque.style.display = 'none'
    //deshabilitar el boton de reiniciar al iniciar lel juego
    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'none'
    //deshabilitar seccion de ataque al iniciar lel juego

    let botnMascotaJugador = document.getElementById("boton-mascotas")
    botnMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let boton_fuego = document.getElementById('boton-fuego')
    boton_fuego.addEventListener('click', ataqueFuego)
    let boton_agua = document.getElementById('boton-agua')
    boton_agua.addEventListener('click', ataqueAgua)
    let boton_tierra = document.getElementById('boton-tierra')
    boton_tierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

    document.getElementById('vidas-jugador').innerHTML = vidasJugador;
    document.getElementById('vidas-enemigo').innerHTML = vidasEnemigo;
}

function seleccionarMascotaJugador() {
    let sectionseleccionarMascota = document.getElementById('seleccionar-mascota');
    let sectionseleccionarAtaque = document.getElementById('seleccionar-ataque');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    let inputhipodoge = document.getElementById('hipodoge');
    let inputcapipepo = document.getElementById('capipepo');
    let inputratigueya = document.getElementById('ratigueya');
    let inputlangostelvis = document.getElementById('langostelvis');
    let inputtucapalma = document.getElementById('tucapalma');
    let inputpydos = document.getElementById('pydos');

    // Comprobamos si se ha seleccionado alguna mascota
    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodge';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';  // Si se seleccionó una mascota, mostramos la sección de ataque
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
    } else if (inputlangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
    } else if (inputtucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
    } else if (inputpydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
    } else {
        alert('¡Selecciona una mascota para jugar!');  // Si no se selecciona ninguna mascota, mostramos una alerta
    }
}



function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6)
    let spanmascota_enemigo = document.getElementById("mascota-enemigo")
    if (mascotaAleatorio == 1) {
        spanmascota_enemigo.innerHTML = 'Hipodge'
    } else if (mascotaAleatorio == 2) {
        spanmascota_enemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3) {
        spanmascota_enemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatorio == 4) {
        spanmascota_enemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatorio == 5) {
        spanmascota_enemigo.innerHTML = 'Tucapalma'
    } else if (mascotaAleatorio == 6) {
        spanmascota_enemigo.innerHTML = 'Pydos'
    } else {
        alert('Selecciona una mascota')
    }
}


function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
} function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua';
    } else {
        ataqueEnemigo = 'Tierra';
    }
    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("GANASTE")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("GANASTE")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("GANASTE")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas();
}

function revisarVidas() {

    if (vidasEnemigo === 0) {
        crearMensajeFinal("Felicitaciones, Ganaste...🥳 ")
    } else if (vidasJugador === 0) {
        crearMensajeFinal("Lo siento, Perdiste...😭")
    }
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    let boton_fuego = document.getElementById('boton-fuego')
    boton_fuego.disabled = true
    let boton_agua = document.getElementById('boton-agua')
    boton_agua.disabled = true
    let boton_tierra = document.getElementById('boton-tierra')
    boton_tierra.disabled = true
    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'block'
}

function crearMensaje(resultado = '') {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensajes.appendChild(parrafo)
}
function reiniciarJuego() {
    location.reload();
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)