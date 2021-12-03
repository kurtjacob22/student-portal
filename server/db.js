const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password12345`,
  database: `studentportal`,
});

module.exports = connection;
