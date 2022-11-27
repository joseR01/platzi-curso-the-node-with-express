const express = require("express");
const router = express.Router()

router.use('/', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({ limit, offset })
  } else {
    res.send("no ha enviado ningun parametro")
  }
})

module.exports = router
