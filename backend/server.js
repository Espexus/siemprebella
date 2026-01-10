const express = require("express");
const cors = require("cors");
const db = require("./bd.js");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/mensajes", (req, res) => {
    const {usuario, mensaje, correo} = req.body;

    if (!usuario || !mensaje || !correo) {
        return res.status(400).json({message: "datos inválidos o incompletos"});
    }

    db.query("CALL agregar_mensaje (?, ?, ?)", [usuario, mensaje, correo], (err, resultado) => {
        if (err) {
            return res.status(500).json({message: "error al realizar la consulta en la base de datos"})
        }
        return res.json({message: "Mensaje enviado correctamente"})
    })
})

app.get("/api/productos", (req,res) => {
    db.query("SELECT nombre, precio, imagen FROM productos ORDER BY nombre ASC", (err, resultado) => {
        if(err) {
            return res.status(500).json({message: "error al realizar la consulta en la base de datos"})
        }
        return res.json(resultado)
    })
})

app.get("/api/productos/categoria/:categoria", (req,res) => {
    const {categoria} = req.params;

    if(!categoria || isNaN(categoria)){
        return res.status(400).json({message: "datos inválidos o incompletos"});
    }
    db.query("CALL productos_categoria (?)", [categoria], (err, resultado) => {
        if(err) {
            return res.status(500).json({message: "error al realizar la consulta en la base de datos"})
        }
        return res.json(resultado[0])
    })
})

app.get("/api/productos/top", (req,res) => {

    db.query("CALL productos_top ()", (err, resultado) => {
        if(err) {
            return res.status(500).json({message: "error al realizar la consulta en la base de datos"})
        }
        return res.json(resultado[0])
    })
})


app.listen(3000, () => {
    console.log("servidor corriendo correctamente el puerto 3000 http://localhost:3000")
})