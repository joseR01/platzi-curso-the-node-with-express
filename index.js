const express = require('express');
const app = express();
const PORT = 3000

app.get("/", (req, res) => {
  res.send("hola este es mi servidor web")
})

app.listen(PORT, () => {
  console.log("puerto: " + PORT)
});
