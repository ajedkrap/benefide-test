
const db = require('../../configs/database')

module.exports = async (query, start, limit) => {
  const { search, sort } = query
  let sql = "SELECT * FROM employees "

  if (search !== '' && search) {
    sql += `WHERE name LIKE '%${search}%' `
  }
  if (parseInt(sort)) {
    sql += `ORDER BY name DESC `
  } else {
    sql += `ORDER BY name ASC `
  }

  sql += 'LIMIT ?, ?'

  return new Promise((resolve, reject) => {
    db.query(sql, [start, limit], (err, res) => {
      if (err) reject(new Error("Internal Server Error"));
      if (res.length < 1) reject(new Error("Employees data empty"));
      else resolve(res);
    });
  });
}