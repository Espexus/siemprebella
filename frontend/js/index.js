(function() {
    const contenedor = document.getElementById("contenedor-mas-vendidos");
    window.addEventListener("DOMContentLoaded", async () => {
        let resultado;
        try {
            const res = await fetch("http://localhost:3000/api/productos/top");
            if (!res.ok) {
                throw new Error("error en la consulta");
            }
            resultado = await res.json();
            mostrarProductosTop(resultado);

        } catch (err) {
            console.error("error al realizar la consulta ", err)
        }
    })

    function mostrarProductosTop(resultado) {
        resultado.forEach(registro => {
            let tarjeta = `
                <div class="tarjeta" id="${registro.id}">
                    <div class="espacio-imagen-tarjeta">
                        <img src="${registro.imagen}" title="${registro.nombre}">
                    </div>
                    <h5 class="precio-tarjeta">${registro.precio}</h5>
                    <button class="boton-carrito">Agregar al carrito</button>
                    <p class="categoria-tarjeta">${registro.categoria}</p>
                </div>  
            `;
            contenedor.insertAdjacentHTML("beforeend", tarjeta);
        });
    }
})()