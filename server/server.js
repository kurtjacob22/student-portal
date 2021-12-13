const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/userAuthorized", function (req, res) {
  res.send({ authorized: true });
});
app.post("/userUnauthorized", function (req, res) {
  res.send({ authorized: false });
});

app.post("/postreq", async (req, res, next) => {
  const ADD_QUERY = `INSERT INTO studentportal.userlogin (email, password) VALUES ('${req.body.search}', '${req.body.search}')`;
  // console.log("data has been received");
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
  const CHECK_QUERY = `SELECT * FROM studentportal.userlogin WHERE email LIKE '${req.body.username}' AND password LIKE '${req.body.password}';`;
  console.log("data has been received");
  connection.query(CHECK_QUERY, (err, result) => {
    if (err) {
      res.send({ error: err });
    }

    if (result.length > 0) {
      // res.send(result);
      res.send({ message: `Hello ${req.body.username}!`, login: true });
    } else {
      res.send({ message: "Incorrect password/user!", login: false });
    }
  });
  console.log(req.body);
});

//! PORT
app.listen(4000, () => {
  console.log("server is working in port 4000");
});
