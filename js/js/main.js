// buscamos el boton en el HTML a traves de su ID
const boton = document.getElementById("btn-modo");

// boton espera el click
boton.addEventListener("click", () => {
    
    //hacen clic y le agregamos (o quitamos) la clase oscuro a todo el body
    document.body.classList.toggle("oscuro");
    
    // cambio de texto del botón para verse mejor
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
});