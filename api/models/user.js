'user strict';
var sql = require('../lib/db');

module.exports = {

  insert(user, result) {
    sql.query("INSERT INTO user (first_name, last_name, email, password, gender, mobile, dob, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [user.first_name, user.last_name, user.email, user.password, user.gender,
    user.mobile, user.dob, user.status], (err, res) => {
      if (err) {
        console.log('create user query', err);
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  },

  fetch(user, result) {
    sql.query("SELECT id, email, first_name, last_name, password, mobile, status, dob, gender FROM user WHERE email = ?", [user.email], (err, res) => {
      if (err) {
        console.log('fetch user query', err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }
};
