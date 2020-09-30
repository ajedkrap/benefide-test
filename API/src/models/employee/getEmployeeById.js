
const db = require('../../configs/database')

module.exports = async (id) => {
  let sql = "SELECT * FROM employees WHERE ? "

  return new Promise((resolve, reject) => {
    db.query(sql, id, (err, res) => {
      if (err) reject(new Error("Internal Server Error"));
      if (res.length < 1) reject(new Error(`Employees No.${id.id} Not Found`));
      else resolve(res[0]);
    });
  });
}