/* eslint-disable no-console */
const express = require('express');
const app = express();
const PORT = 3000

app.get("/", (req, res) => {
  res.send("hola este es mi servidor web")
})

app.get("/ruta1", (req, res) => {
  res.send("esta es tu nueva Ruta")
});

app.get("/ruta2", (req, res) => {
  res.json({
    name: "casa de mis suenos",
    precio: 3000
  })
});

app.listen(PORT, () => {
  console.log("puerto: " + PORT)
});
