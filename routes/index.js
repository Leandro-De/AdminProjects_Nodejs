const express = require("express");
const router = express.Router();

module.exports = function () {
  //Ruta para el home
  router.get("/", (req, res) => {
    res.send("Hola");
  });

  return router;
};
