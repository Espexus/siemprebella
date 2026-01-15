(function() {
    const boton = document.getElementById("btnFiltros");
    const formulario = document.getElementById("formulario-filtros");
    boton.addEventListener("click", () => {
        formulario.classList.toggle("oculto");
    })
})()