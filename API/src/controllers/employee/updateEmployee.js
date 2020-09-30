const response = require("../../helpers/response")
const validation = require("../../validator/employee")
const updateEmployee = require("../../models/employee/updateEmployee")

module.exports = async (req, res) => {
  const { status, message, passed } = await validation.update(req.params, req.body)
  if (!status) {
    res.status(404).send(response(status, message))
  }
  else {
    try {
      const updatedEmployee = await updateEmployee(passed)
      res.status(201).send(response(status, message, updatedEmployee))
    } catch (e) {
      res.status(500).send(response(false, e.message))
    }
  }
}