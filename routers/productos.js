const express = require("express")
const router = express.Router()
const faker = require("faker")

router.get("/", (req, res) => {
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

router.get("/filter", (req, res) => {
  res.send("aqui vamos a filtrar");
})

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: `producto ${id}`
  });
});


module.exports = router;
