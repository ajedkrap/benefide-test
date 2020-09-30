const response = require("../../helpers/response")
const validation = require("../../validator/employee")
const createEmployee = require("../../models/employee/createEmployee")

module.exports = async (req, res) => {
  const { status, message, passed } = await validation.create(req.body)
  if (!status) {
    res.status(404).send(response(status, message))
  }
  else {
    try {
      const createdEmployee = await createEmployee(passed)
      res.status(201).send(response(status, message, createdEmployee))
    } catch (e) {
      res.status(500).send(response(false, e.message))
    }
  }
}