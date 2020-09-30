const router = require("express").Router()
const { combination, fibonacci, reverse } = require("../controllers/others/others")

router
  .post("/combination", combination)
  .post("/fibonacci", fibonacci)
  .post("/reverse", reverse)

module.exports = router