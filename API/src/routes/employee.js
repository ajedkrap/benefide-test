const router = require("express").Router()

router
  .get("/:id")
  .get("/")
  .post("/")
  .put("/:id")
  .delete("/:id")

module.exports = router