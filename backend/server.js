const express = require("express");
const cors = require("cors");
const db = require("./bd.js");

const app = express();
app.use(cors());
app.use(express.json());




app.listen(3000, () => {
    console.log("servidor corriendo correctamente el puerto 3000 http://localhost:3000")
})