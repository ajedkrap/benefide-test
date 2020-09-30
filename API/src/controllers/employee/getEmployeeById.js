const response = require("../../helpers/response");
const getEmployeeById = require("../../models/employee/getEmployeeById")

module.exports = async (req, res) => {
  const { id } = req.params
  try {
    const getEmployee = await getEmployeeById({ id: parseInt(id) })
    res.status(200).send(response(true, "List of Employees", getEmployee))
  }
  catch (e) {
    res.status(500).send(response(false, e.message))
  }
}