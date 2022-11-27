const express = require("express");
const router = express.Router()

router.use("/:categoriaId/productos/:productosId", (req, res) => {

  const { categoriaId, productosId } = req.params;

  res.json({
    categoriaId,
    productosId
  })
});

router.use("/:categoriaId/", (req, res) => {

  const { categoriaId } = req.params;

  res.json({
    categoriaId,
  })
});

router.use("/", (req, res) => {
  const categoria = [
    {
      name: "home",
      precio: "1000"
    },
    {
      name: "muebles",
      precio: "500"
    },
    {
      name: "cocina",
      precio: "500"
    },
  ]

  res.send(categoria)
});


module.exports = router;
