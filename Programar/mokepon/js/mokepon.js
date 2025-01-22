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

// Función para generar un número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para seleccionar la mascota del jugador
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
        spanMascotaJugador.innerHTML = '<img src="./assets/mokepons_mokepon_hipodoge_attack.webp" alt="Hipodge" class="imagen-mascota">';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
        seleccionarMascotaEnemigo(); // Llamamos a la función para que el enemigo elija su mascota
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = '<img src="./assets/mokepons_mokepon_capipepo_attack.webp" alt="Capipepo" class="imagen-mascota">';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
        seleccionarMascotaEnemigo(); // Llamamos a la función para que el enemigo elija su mascota
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = '<img src="./assets/mokepons_mokepon_ratigueya_attack.webp" alt="Ratigueya" class="imagen-mascota">';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
        seleccionarMascotaEnemigo(); // Llamamos a la función para que el enemigo elija su mascota
    } else if (inputlangostelvis.checked) {
        spanMascotaJugador.innerHTML = '<img src="./assets/mokepons_mokepon_Langostelvis_attack.png" alt="Langostelvis" class="imagen-mascota">';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
        seleccionarMascotaEnemigo(); // Llamamos a la función para que el enemigo elija su mascota
    } else if (inputtucapalma.checked) {
        spanMascotaJugador.innerHTML = '<img src="./assets/mokepons_mokepon_Tucapalma_attack.png" alt="Tucapalma" class="imagen-mascota">';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
        seleccionarMascotaEnemigo(); // Llamamos a la función para que el enemigo elija su mascota
    } else if (inputpydos.checked) {
        spanMascotaJugador.innerHTML = '<img src="./assets/mokepons_mokepon_pydos_attack.png" alt="Pydos" class="imagen-mascota">';
        sectionseleccionarMascota.style.display = 'none';
        sectionseleccionarAtaque.style.display = 'block';
        seleccionarMascotaEnemigo(); // Llamamos a la función para que el enemigo elija su mascota
    } else {
        alert('¡Selecciona una mascota para jugar!');  // Si no se selecciona ninguna mascota, mostramos una alerta
    }
}

// Función para seleccionar una mascota enemiga de forma aleatoria

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6);
    let spanmascotaEnemigo = document.getElementById("mascota-enemigo");
    
    if (mascotaAleatorio == 1) {
        spanmascotaEnemigo.innerHTML = '<img src="./assets/mokepons_mokepon_hipodoge_attack.webp" alt="Hipodge" class="imagen-mascota">';
    } else if (mascotaAleatorio == 2) {
        spanmascotaEnemigo.innerHTML = '<img src="./assets/mokepons_mokepon_capipepo_attack.webp" alt="Capipepo" class="imagen-mascota">';
    } else if (mascotaAleatorio == 3) {
        spanmascotaEnemigo.innerHTML = '<img src="./assets/mokepons_mokepon_ratigueya_attack.webp" alt="Ratigueya" class="imagen-mascota">';
    } else if (mascotaAleatorio == 4) {
        spanmascotaEnemigo.innerHTML = '<img src="./assets/mokepons_mokepon_Langostelvis_attack.png" alt="Langostelvis" class="imagen-mascota">';
    } else if (mascotaAleatorio == 5) {
        spanmascotaEnemigo.innerHTML = '<img src="./assets/mokepons_mokepon_Tucapalma_attack.png" alt="Tucapalma" class="imagen-mascota">';
    } else if (mascotaAleatorio == 6) {
        spanmascotaEnemigo.innerHTML = '<img src="./assets/mokepons_mokepon_pydos_attack.png" alt="Pydos" class="imagen-mascota">';
    }
}

function ataqueFuego() {
    ataqueJugador = '🔥 FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = '💧 AGUA'
    ataqueAleatorioEnemigo()
} function ataqueTierra() {
    ataqueJugador = '🌍 TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = '🔥 FUEGO';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = '💧 AGUA';
    } else {
        ataqueEnemigo = '🌍 TIERRA';
    }
    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("🤜 EMPATE 🤛")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("🥳 GANASTE 🥳")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("🥳 GANASTE 🥳")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("🥳 GANASTE 🥳")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("😭 PERDISTE 😭")
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas();
}

function revisarVidas() {

    if (vidasEnemigo === 0) {
        let crearMensajeFinal = "Felicitaciones, 🥳 GANASTE 🥳";
        alert(crearMensajeFinal);  // Muestra el mensaje en una ventana de alerta
    } else if (vidasJugador === 0) {
        let crearMensajeFinal = "Lo siento, 😭 PERDISTE 😭";
        alert(crearMensajeFinal);  // Muestra el mensaje en una ventana de alerta
        reiniciarJuego()
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
    let mensaje = 'Tu mascota atacó con ' + ataqueJugador + '\n' +
    'La mascota del enemigo atacó con ' + ataqueEnemigo + '\n' +
    '📌 ' + resultado;    
    alert(mensaje);  // Muestra el mensaje en una ventana de alerta
}
function reiniciarJuego() {
    location.reload();
}

function cambiarFondo() {
    document.body.style.backgroundImage = "url('./assets/battle.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
window.addEventListener('load', iniciarJuego)