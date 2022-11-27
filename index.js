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

app.get("/productos", (req, res) => {
  res.json([
    {
      name: "tv",
      precio: 1000
    },
    {
      name: "laptop",
      precio: 1200
    },
    {
      name: "carro",
      precio: 2000
    },
    {
      name: "casa",
      precio: 3000
    },
  ])
});

app.get("/productos/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: `producto ${id}`
  });
});

app.get("/categorias/:categoriaId/productos/:productosId", (req, res) => {

  const { categoriaId, productosId } = req.params;

  res.json({
    categoriaId,
    productosId
  })
});

app.listen(PORT, () => {
  console.log("puerto: " + PORT)
});
