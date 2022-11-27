const productRouter = require("./productos");
const userRouter = require("./user")
const categoriasRouter = require("./categorias")

function RouterApi(app) {
  app.use("/productos", productRouter);
  app.use("/user", userRouter)
  app.use("/categorias", categoriasRouter)
}

module.exports = RouterApi
