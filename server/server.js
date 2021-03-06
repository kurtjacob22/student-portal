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

// app.post("/postreq", async (req, res, next) => {
//   const ADD_QUERY = `INSERT INTO studentportal.userlogin (email, password) VALUES ('${req.body.search}', '${req.body.search}')`;
//   // console.log("data has been received");
//   connection.query(ADD_QUERY, (err, res) => {
//     if (err) {
//       console.log(err);
//     }
//     // else {
//     //   res.send("The query is successful");
//     // }
//   });
//   console.log(req.body);
// });

app.post("/logHistory", async (req, res, next) => {
  const ADD_QUERY = `INSERT INTO studentportal.loghistory VALUES (${req.body.username}, '${req.body.city}, ${req.body.countryName}', '${req.body.ip}', '${req.body.timeAndDate}')`;
  // console.log("data has been received");
  connection.query(ADD_QUERY, (err, res) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(req.body);
});

app.post("/deleteLogs", async (req, res) => {
  const DELETE_QUERY = `DELETE FROM studentportal.loghistory WHERE studentId LIKE ${req.body.id}`;
  connection.query(DELETE_QUERY, (err, result) => {
    if (err) {
      console.log(err);
      // res.send({ message: err });
    }
    console.log(req.body);
  });
  res.send({ message: "Success" });
});

app.post("/viewLogs", async (req, res) => {
  const GET_QUERY = `SELECT * FROM studentportal.loghistory WHERE studentId LIKE ${req.body.id}`;
  connection.query(GET_QUERY, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ logData: result, message: "Success" });
  });

  console.log(req.body);
});

app.post("/updatePassword", async (req, res) => {
  const UPDATE_PASSWORD = `UPDATE studentportal.students SET password = '${req.body.newPassword}' WHERE studentId LIKE ${req.body.id}`;
  connection.query(UPDATE_PASSWORD, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Success" });
  });

  console.log(req.body);
});

app.post("/viewAvailableCourses", async (req, res) => {
  const GET_COURSES = `SELECT * FROM studentportal.availablesubjects WHERE collegeId LIKE ${req.body.id} AND type LIKE '${req.body.type}'`;
  console.log(req.body.collegeId);
  connection.query(GET_COURSES, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Success", courses: result });
  });
  console.log(req.body);
});

app.post("/viewAvailableCoursesMinor", async (req, res) => {
  const GET_COURSES = `SELECT * FROM studentportal.availablesubjects WHERE collegeId NOT LIKE ${req.body.id} AND type LIKE '${req.body.type}'`;
  console.log(req.body.collegeId);
  connection.query(GET_COURSES, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Success", courses: result });
  });
  console.log(req.body);
});

app.post("/viewAvailableCoursesPED", async (req, res) => {
  const GET_COURSES = `SELECT * FROM studentportal.availablesubjects WHERE collegeId NOT LIKE ${req.body.id} AND type LIKE '${req.body.type}'`;
  console.log(req.body.collegeId);
  connection.query(GET_COURSES, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Success", courses: result });
  });
  console.log(req.body);
});

app.post("/viewAvailableCoursesNSTP", async (req, res) => {
  const GET_COURSES = `SELECT * FROM studentportal.availablesubjects WHERE collegeId NOT LIKE ${req.body.id} AND type LIKE '${req.body.type}'`;
  console.log(req.body.collegeId);
  connection.query(GET_COURSES, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Success", courses: result });
  });
  console.log(req.body);
});

app.post("/login", async (req, res, next) => {
  const CHECK_QUERY = `SELECT * FROM studentportal.students WHERE studentId LIKE '${req.body.username}' AND password LIKE '${req.body.password}';`;
  console.log("data has been received");
  connection.query(CHECK_QUERY, (err, result) => {
    if (err) {
      res.send({ error: err });
    }

    if (result.length > 0) {
      // res.send(result);
      // console.log(result[0]);
      res.send({
        message: `Hello ${result[0].firstname} ${result[0].surname}!`,
        login: true,
        id: result[0].studentId,
        userInfo: result[0],
      });
    } else {
      res.send({ message: "Incorrect password/user!", login: false });
    }
  });
  console.log(req.body);
});

app.post("/editContacts", async (req, res, next) => {
  const UPDATE_QUERY = `update studentportal.students set contactNumber = ${req.body.newContact} where studentId = ${req.body.id}`;
  connection.query(UPDATE_QUERY, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  res.send({
    message: "success",
    newContactNumber: req.body.newContact,
  });
  console.log(req.body);
});

app.post("/enroll", async (req, res) => {
  const UPDATE_STUDENT_COUNT = `UPDATE studentportal.availablesubjects SET studentCount = ${req.body.studentCount} + 1 WHERE courseCode LIKE '${req.body.courseCode}';`;
  const CHECK_IF_DUPLICATE = `SELECT * FROM studentportal.subjects WHERE courseCode LIKE '${req.body.courseCode}' AND studentId LIKE ${req.body.id};`;
  const INSERT_NEW = `INSERT INTO studentportal.subjects (courseCode, courseName, collegeId, studentId) VALUES ('${req.body.courseCode}', '${req.body.courseName}', ${req.body.collegeId}, ${req.body.id});`;
  connection.query(CHECK_IF_DUPLICATE, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      // res.send(result);
      // console.log(result[0]);
      res.send({
        message: `Sorry, you've already enrolled in ${req.body.courseCode}`,
      });
    } else {
      // res.send({
      //   message: `Thankyou for enrolling in ${req.body.courseCode}`,
      //   newStudentCount: req.body.studentCount + 1,
      // });
      connection.query(INSERT_NEW, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send({
          message: `Thankyou for enrolling in ${req.body.courseCode} ${req.body.courseName}`,
        });
        connection.query(UPDATE_STUDENT_COUNT, (err, result) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  });

  console.log(req.body);
});

app.post("/viewStudentCourses", async (req, res) => {
  const VIEW_COURSES = `SELECT * FROM studentportal.subjects WHERE studentId LIKE ${req.body.studentId}`;
  connection.query(VIEW_COURSES, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "success", courses: result });
  });
});

app.post("/attendance", async (req, res) => {
  const ATTENDANCE_INSERT = `INSERT INTO studentportal.attendance (studentId, courseCode, dateTime) VALUES (${req.body.id}, '${req.body.courseCode}', CURRENT_TIMESTAMP)`;
  const CHECK_IF_PRESENT = `SELECT * FROM studentportal.attendance WHERE (studentId LIKE ${req.body.id} AND dateTime LIKE '${req.body.date}%') AND courseCode LIKE '${req.body.courseCode}'`;
  connection.query(CHECK_IF_PRESENT, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send({
        message: "You've already taken your attendance",
        result: result,
      });
    } else {
      connection.query(ATTENDANCE_INSERT, (err) => {
        if (err) {
          console.log(err);
        }
        res.send({ message: "success", result: result });
      });
      // res.send({ message: "success", result: result });
    }
  });
});

// app.post("/checkPassword", (req, res) => {
//   const CHECK_PASSWORD = `SELECT * FROM studentportal.students WHERE studentId LIKE ${req.body.id} AND password LIKE ${req.body.password}`;
//   connection.query(CHECK_PASSWORD, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     if (result.length > 0) {
//       res.send({ message: "success", result: result });
//     }
//   });
// });

//! PORT
app.listen(4000, () => {
  console.log("server is working in port 4000");
});
