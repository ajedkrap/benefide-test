const db = require("../../configs/database")

module.exports = async (data) => {
  const sql = "DELETE FROM employees WHERE ?"
  return new Promise((resolve, reject) => {
    db.query(sql, data, (err, res) => {
      if (err) reject(new Error("Delete Employee Error"))
      else if (res.affectedRows < 1) reject(new (Error("Database Error")))
      else resolve(true)
    })
  })
}