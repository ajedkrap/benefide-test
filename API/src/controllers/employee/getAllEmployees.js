const response = require("../../helpers/response");
const countEmployees = require("../../models/employee/countEmployees");
const getAllEmployees = require("../../models/employee/getAllEmployees");
const pagination = require("../../utils/pagination")

module.exports = async (req, res) => {
  try {
    const { result, pageInfo } = await pagination(
      req.query,
      getAllEmployees,
      countEmployees,
      "api/employees"
    );
    res.status(200).send(response(true, "List of Employees", result, { pageInfo }));
  }
  catch (e) {
    res.status(500).send(response(false, e.message))
  }
}