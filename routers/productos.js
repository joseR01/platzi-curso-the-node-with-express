const express = require("express")
const ProductsService = require("../service/productos");


const router = express.Router()
const service = new ProductsService()

router.get("/", (req, res) => {
  const productos = service.find()
  res.json({ size: productos.length, data: productos })
});

router.get("/filter", (req, res) => {
  res.send("aqui vamos a filtrar");
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const products = service.findOne(id)
  if (products) {

    res.status(200).json(products);
  } else {
    res.status(404).json({
      message: "no se encontro el producto"
    });

  }
})
router.post("/", (req, res) => {
  const body = req.body;
  const newProducto = service.create(body)

  res.status(201).json({
    message: "created",
    data: newProducto
  })
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);

  res.json({
    message: "update",
    date: { product },

  })
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const products = service.delete(id)

  res.json({
    message: "deleted",
    products
  })
});
module.exports = router;
