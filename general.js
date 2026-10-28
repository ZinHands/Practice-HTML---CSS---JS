let formulario = document.querySelector("form");
let nombre = document.getElementById("inputName");
let vida = document.getElementById("inputLifes");

const jugadores = [];

formulario.addEventListener("submit", guardado);

function guardado(e) {
    e.preventDefault();
    let inputNombre = nombre.value.trim();
    let inputVida = Number(vida.value.trim());

    const jugador = {
        nombre: inputNombre,
        vida: inputVida
    };

    function registroJugador() {

        console.log("Registrando jugador...");

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Jugador registrado");
                jugadores.push(jugador);
                console.log(jugadores);
            }, 2000);
        });
    }

    registroJugador()
        .then(consola => console.log(consola));

    let juegoInfo = document.querySelector(".gameInfo");
    let li = document.createElement("li");
    let liTexto = document.createElement("li");
    let button = document.createElement("button");

    li.textContent = `${jugador.nombre} - ${jugador.vida} vidas`;
    juegoInfo.append(li);

    button.setAttribute("type", "submit");
    button.textContent = "Jugar";
    li.append(button);

    button.addEventListener("click", juego);

    function juego() {
        jugador.vida--;
        liTexto.setAttribute("class", "daño");
        liTexto.textContent = "Recibiste daño, -1 de vida";
        juegoInfo.append(liTexto);
        
        if (jugador.vida > 1) {
            li.textContent = `${jugador.nombre} - ${jugador.vida} vidas`;
            li.append(button);
        } else if (jugador.vida === 1) {
            li.textContent = `${jugador.nombre} - ${jugador.vida} vida`;
            li.append(button);
        } else if (jugador.vida === 0) {
            liTexto.remove();
            li.textContent = `Perdiste, no tenés más vidas`;
        } 
        console.log(jugadores);
    }
}


