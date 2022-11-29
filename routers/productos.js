const express = require("express")
const ProductsService = require("../service/productos");


const router = express.Router()
const service = new ProductsService()

router.get("/", async (req, res) => {
  const productos = await service.find()
  res.json({ size: productos.length, data: productos })
});

router.get("/filter", (req, res) => {
  res.send("aqui vamos a filtrar");
})

router.get("/:id", async (req, res, next) => {

  try {
    const { id } = req.params;
    const products = await service.findOne(id)
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({
        message: "no se encontro el producto"
      });

    }
  } catch (error) {
    next(error)
  }

})
router.post("/", async (req, res) => {
  const body = req.body;
  const newProducto = await service.create(body)

  res.status(201).json({
    message: "created",
    data: newProducto
  })
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: "update",
      date: { product },

    })
  } catch (error) {
    next(error)
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await service.delete(id)

    res.json({
      message: "deleted",
      products
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});
module.exports = router;
