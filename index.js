/* eslint-disable no-console */
const express = require('express');
const RouterApi = require("./routers")
const app = express();
const PORT = 3000

app.use(express.json())
app.get("/", (req, res) => {
  res.send("hola este es mi servidor web")
})

RouterApi(app)

app.listen(PORT, () => {
  console.log("puerto: " + PORT)
});
