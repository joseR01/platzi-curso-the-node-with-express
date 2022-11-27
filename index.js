/* eslint-disable no-console */
const express = require('express');
const faker = require("faker")
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
  const productos = []
  const { size = 10 } = req.query

  for (let index = 0; index < size; index++) {

    productos.push({
      id: index + 1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json({ size: productos.length, data: productos })
});

app.get("/productos/filter", (req, res) => {
  res.send("aqui vamos a filtrar");
})

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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({ limit, offset })
  } else {
    res.send("no ha enviado ningun parametro")
  }
})

app.listen(PORT, () => {
  console.log("puerto: " + PORT)
});
