// 💡 Modo Claro/Oscuro
const toggleButton = document.createElement("button");
toggleButton.innerText = "Cambiar Tema";
toggleButton.id = "toggle-theme";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Cargar el tema guardado
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// 🎯 Resaltar mensajes nuevos (animación)
setTimeout(() => {
    document.querySelectorAll(".message.new").forEach(msg => msg.classList.remove("new"));
}, 3000);
