// buscamos el botón en el HTML a través de su ID
const boton = document.getElementById("btn-modo");

//  botón espera el clic
boton.addEventListener("click", () => {
    
    // agregamos (o quitamos) la clase "oscuro" a todo el body
    document.body.classList.toggle("oscuro");
    
    // cambiamos el texto del botón
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
});