const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

// Helpers con algunas funciones
const helpers = require("./helpers");

// Crear la conexion a la bd
const db = require("./config/db");

// importar el modelo
require("./models/Proyectos");

db.sync()
  .then(() => console.log("Conectado al servidor"))
  .catch((error) => console.log(error));

// Crear una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static("public"));

//Habilitar Pug
app.set("view engine", "pug");

//Añadir las carpetas de las vistas
app.set("views", path.join(__dirname, "./views"));

//pasar var dump a la aplicacion
app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());
app.listen(3000);
