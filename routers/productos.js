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

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "created",
    data: body
  })
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: "update",
    date: { id, ...body },

  })
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id
  })
});
module.exports = router;
