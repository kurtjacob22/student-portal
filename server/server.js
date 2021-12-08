const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/postreq", async (req, res, next) => {
  const ADD_QUERY = `INSERT INTO studentportal.userlogin (email, password) VALUES ('${req.body.search}', '${req.body.search}')`;
  console.log("data has been received");
  connection.query(ADD_QUERY, (err, res) => {
    if (err) {
      console.log(err);
    }
    // else {
    //   res.send("The query is successful");
    // }
  });
  console.log(req.body);
});

app.post("/login", async (req, res, next) => {
  const CHECK_QUERY = `SELECT email AND password FROM studentportal.userlogin WHERE email LIKE '${req.body.username}' AND password LIKE '${req.body.password}';`;
  console.log("data has been received");
  connection.query(CHECK_QUERY, (err, result) => {
    if (err) {
      res.send(err);
    }
    console.log(result);
    // else {
    //   res.send("The query is successful");
    // }
  });
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("server is working in port 4000");
});
