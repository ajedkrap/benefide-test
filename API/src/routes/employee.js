const router = require("express").Router()
const getAllEmployees = require("../controllers/employee/getAllEmployees")
const getEmployeeById = require("../controllers/employee/getEmployeeById")
const createEmployee = require("../controllers/employee/createEmployee")
const updateEmployee = require("../controllers/employee/updateEmployee")
const deleteEmployee = require("../controllers/employee/deleteEmployee")

router
  .get("/:id", getEmployeeById)
  .get("/", getAllEmployees)
  .post("/", createEmployee)
  .put("/:id", updateEmployee)
  .delete("/:id", deleteEmployee)

module.exports = router