const express = require("express");
//requiere el archivo de conexion de la DB
const conectarDB = require("./config/db");
const cors = require("cors");

//crea la app de express
const app = express();

//invoca la funcion
conectarDB();

//habilita cors
app.use(cors());

//habilita a la app a usar JSON por medio de express
app.use(express.json({ extend: true }));

//asigna a la constante el puerto asignado el el archivo de enviroment o el 4000
const port = process.env.PORT || 4000;

//crea las rutas y les asigna a las mismas sus distintos metodos
//usuarios
app.use("/api/usuarios", require("./routes/usuarios"));
//autenticacion
app.use("/api/auth", require("./routes/auth"));
//proyectos
app.use("/api/proyectos", require("./routes/proyectos"));
//tareas
app.use("/api/tareas", require("./routes/tareas"));

//escucha las respuestas del servidor en el puerto
app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor en puerto: ${port}`);
});