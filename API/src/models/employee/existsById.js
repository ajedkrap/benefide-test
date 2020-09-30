const db = require('../../configs/database')

module.exports = async (id) => {
  let sql = "SELECT * FROM employees WHERE ? "

  return new Promise((resolve, reject) => {
    db.query(sql, id, (err, res) => {
      if (err) reject(new Error("Internal Server Error"));
      if (res.length < 1) resolve(false);
      else resolve(true);
    });
  });
}