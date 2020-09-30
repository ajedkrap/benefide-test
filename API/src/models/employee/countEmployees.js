const db = require("../../configs/database")

module.exports = async (query) => {
  let sql = "SELECT COUNT(*) as count FROM employees "

  if (query.search !== '' && query.search) {
    sql += `WHERE name LIKE '%${query.search}%' `
  }

  return new Promise((resolve, reject) => {
    db.query(sql, (err, res) => {
      if (err) reject(new Error("Internal Server Error"));
      if (res[0].count < 1) reject(new Error("Employee data not Found"));
      else resolve(res[0].count);
    });
  });
}