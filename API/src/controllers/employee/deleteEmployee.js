const response = require("../../helpers/response")
const validation = require("../../validator/employee")
const deleteEmployee = require("../../models/employee/deleteEmployee")

module.exports = async (req, res) => {
  const { status, message, passed } = await validation.delete(req.params)
  if (!status) {
    res.status(404).send(response(status, message))
  }
  else {
    try {
      await deleteEmployee(passed)
      res.status(204).send(response(status, message))
    } catch (e) {
      res.status(500).send(response(false, e.message))
    }
  }
}