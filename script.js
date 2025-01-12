// Mostrar la fecha en la que se conocieron
const fechaConocidos = "16 de septiembre de 2023";
document.getElementById("fecha-conocidos").textContent = fechaConocidos;

// Guardar el mensaje del día
function guardarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() !== "") {
        localStorage.setItem("mensajeDia", mensaje);
        mostrarMensaje();
    } else {
        alert("Por favor, escribe un mensaje.");
    }
}

// Mostrar el mensaje guardado
function mostrarMensaje() {
    const mensajeGuardado = localStorage.getItem("mensajeDia");
    if (mensajeGuardado) {
        document.getElementById("mensaje-dia").textContent = mensajeGuardado;
    }
}

// Mostrar el mensaje guardado al cargar la página
window.onload = mostrarMensaje;
