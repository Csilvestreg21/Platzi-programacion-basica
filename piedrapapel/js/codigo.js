document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn");
    const mensaje = document.getElementById("mensaje");
    const victoriasSpan = document.getElementById("victorias");
    const derrotasSpan = document.getElementById("derrotas");

    let triunfos = 0;
    let perdidas = 0;

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const eleccionJugador = parseInt(boton.dataset.eleccion);
            const eleccionComputadora = aleatorio(1, 3);

            const resultado = determinarGanador(eleccionJugador, eleccionComputadora);

            mensaje.textContent = `Elegiste ${eleccion(eleccionJugador)}, la computadora eligió ${eleccion(eleccionComputadora)}. ${resultado}`;

            // Eliminar clases previas antes de añadir nuevas
            mensaje.classList.remove("mensaje-exito", "mensaje-error"); 

            if (resultado === "¡Ganaste!") {
                triunfos++;
                mensaje.classList.add("mensaje-exito"); // Establecer mensaje de éxito
            } else if (resultado === "Perdiste.") {
                perdidas++;
                mensaje.classList.add("mensaje-error"); // Establecer mensaje de error
            }

            actualizarMarcador();
            verificarFinDelJuego();
        });
    });

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function eleccion(jugada) {
        switch (jugada) {
            case 1: return "Piedra 🪨 🪨";
            case 2: return "Papel 📜 📜";
            case 3: return "Tijera ✂️ ✂️";
            default: return "MAL ELEGIDO";
        }
    }

    function determinarGanador(jugador, computadora) {
        if (jugador === computadora) {
            return "Es un empate.";
        } else if (
            (jugador === 1 && computadora === 3) ||
            (jugador === 2 && computadora === 1) ||
            (jugador === 3 && computadora === 2)
        ) {
            return "¡Ganaste!";
        } else {
            return "Perdiste.";
        }
    }

    function actualizarMarcador() {
        victoriasSpan.textContent = triunfos;
        derrotasSpan.textContent = perdidas;
    }

    function verificarFinDelJuego() {
        // Primero, eliminamos las clases de estilos previos y el color en línea
        mensaje.classList.remove("mensaje-exito", "mensaje-error");
        mensaje.style.color = "";  // Elimina cualquier color en línea
        mensaje.style.fontSize = "";  // Elimina el tamaño de texto en línea
        mensaje.style.fontWeight = "";  // Elimina el grosor de la fuente en línea
        mensaje.style.textDecoration = "";
        // Ahora, verificamos si el jugador ganó o perdió
        if (triunfos === 3) {
            mensaje.textContent = "¡Felicidades, ganaste la partida!";
            mensaje.classList.add("mensaje-exito"); // Agrega la clase de éxito
            mensaje.style.color = "#28a745"; // verde
            mensaje.style.fontSize = "30px"; // Tamaño del texto
            mensaje.style.fontWeight = "bold"; // Grosor de la fuente
            mensaje.style.textDecoration = "underline"; // Subrayado
            reiniciarJuego();
        } else if (perdidas === 3) {
            mensaje.textContent = "Lo siento, perdiste la partida.";
            mensaje.classList.add("mensaje-error"); // Agrega la clase de error
            mensaje.style.color = "#dc3545"; // rojo
            mensaje.style.fontSize = "30px"; // Tamaño del texto
            mensaje.style.fontWeight = "bold"; // Grosor de la fuente
            mensaje.style.textDecoration = "underline"; // Subrayado
            reiniciarJuego();
        }
    }
        
    function reiniciarJuego() {
        triunfos = 0;
        perdidas = 0;
        actualizarMarcador();
    }
});