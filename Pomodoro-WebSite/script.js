var intervalo;
var minutos = 25; // Minutos desde los cuales comenzar la cuenta regresiva
var segundos = 0; // Segundos iniciales

function iniciarCuentaRegresiva() {
    var totalSegundos = minutos * 60 + segundos; // Calcula el total de segundos

    intervalo = setInterval(function () {
        var elementoContador = document.getElementById("contador");

        var minutosRestantes = Math.floor(totalSegundos / 60);
        var segundosRestantes = totalSegundos % 60;

        if (minutosRestantes < 10) minutosRestantes = "0" + minutosRestantes;
        if (segundosRestantes < 10) segundosRestantes = "0" + segundosRestantes;

        elementoContador.textContent = minutosRestantes + ":" + segundosRestantes;

        if (totalSegundos === 0) {
            clearInterval(intervalo);
            mostrarAlerta();
        }

        totalSegundos--;
    }, 1000); // Intervalo de actualización en milisegundos (1 segundo)
}

function mostrarAlerta() {
    var alarma = document.getElementById("alarm");
    alarm.play();
}

function reiniciarCuentaRegresiva() {
    clearInterval(intervalo);
    minutos = 25; // Reinicia los minutos
    segundos = 0; // Reinicia los segundos
    var elementoContador = document.getElementById("contador");
    elementoContador.textContent = "00:00"; // Reinicia la visualización del contador
}

window.onload = function () {
    Tiempo();
};

// configuracion

var configButton = document.getElementById("configButton");
var configModal = document.getElementById("configModal");
var closeButton = document.getElementsByClassName("close")[0];

configButton.addEventListener("click", function () {
    configModal.style.display = "block";
});

closeButton.addEventListener("click", function () {
    configModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == configModal) {
        configModal.style.display = "none";
    }
});
