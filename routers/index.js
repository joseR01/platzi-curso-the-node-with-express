const express = require("express")

const productRouter = require("./productos");
const userRouter = require("./user")
const categoriasRouter = require("./categorias")

function RouterApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use("/productos", productRouter);
  router.use("/user", userRouter)
  router.use("/categorias", categoriasRouter)
}

module.exports = RouterApi
