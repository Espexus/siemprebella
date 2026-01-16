(function () {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = new FormData(formulario);
        const usuario = `${datos.get("nombre")} ${datos.get("apellido")}`;
        const mensaje = datos.get("mensaje");
        const correo = datos.get("correo");
        const telefono = datos.get("telefono");

        if (!usuario || !mensaje || !correo || !telefono) {
            alert("llena todos los datos");
            return;
        }

        let resultado;
        try {
            const res = await fetch("http://localhost:3000/api/mensajes", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({usuario, mensaje, correo, telefono})
            })
            if (!res.ok) {
                throw new Error("error al agregar los datos");
            }
            resultado = await res.json();

        } catch (err) {
            console.error("error ", err);
        }

        alert(resultado.message);
    })
})()