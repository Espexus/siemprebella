(function(){
    window.addEventListener("DOMContentLoaded", async () => {
        let resultado;
        try {
            const res = await fetch("http://localhost:3000/api/productos");
            if(!res.ok) {
                throw new Error("error al realizar la consulta");
            }
            resultado = await res.json();
            mostrarProductos(resultado);

        } catch (err) {
            console.error("error ", err);
        }
    })

    const selects = document.querySelectorAll(".filtro-categoria");
    selects.forEach(filtro => {
        filtro.addEventListener("change", async () => {
            try {
                const categoria = filtro.id;
                const res = await fetch(`http://localhost:3000/api/productos/categoria/${categoria}`);
                if(!res.ok) {
                throw new Error("error al realizar la consulta");
            }
            resultado = await res.json();
            mostrarProductos(resultado);

            } catch (err) {
                console.error("error ", err);
            }
        })
    })

    function mostrarProductos (resultado) {
        const contenedorPadre = document.getElementById("lista-productos");
        let contenedor = document.createElement("div");
        contenedor.classList.add("flex-horizontal-productos");

        let contador = 0;
        if (resultado.length == 0) {
            return;
        }
        contenedorPadre.textContent = "";

        resultado.forEach (registro => {
            const tarjeta = `
                <div class="tarjeta" id="${registro.id}">
                    <div class="espacio-imagen-tarjeta">
                        <img src="${registro.imagen}" title="${registro.nombre}">
                    </div>
                    <p class="nombre-tarjeta">${registro.nombre}</p>
                    <h5 class="precio-tarjeta">${registro.precio}</h5>
                    <button class="boton-carrito">Agregar al carrito</button>
                </div>  
            `;
            contenedor.insertAdjacentHTML("beforeend", tarjeta);
            contador++

            if(contador == 3) {
                contenedorPadre.appendChild(contenedor);
                contador = 0;
                contenedor = document.createElement("div");
                contenedor.classList.add("flex-horizontal-productos"); 
            }
        });

        if (contador > 0) {
                contenedorPadre.appendChild(contenedor);
        }
    }
})()