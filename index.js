/* eslint-disable no-console */
const express = require('express');
const RouterApi = require("./routers")
const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/error")

const app = express();
const PORT = 3000

app.use(express.json())
app.get("/", (req, res) => {
  res.send("hola este es mi servidor web")
})

RouterApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("puerto: " + PORT)
});
