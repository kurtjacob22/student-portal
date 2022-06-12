//* JSX file for the Course View Page
//* ---------- Imports of react hooks, routers, axios
//* ---------- implements Animate.CSS for minor animations
//* ---------- can view current subjects and courses of a student
//* ---------- attendance function

import React, { useState } from "react";
import Navbar from "../Navbar";
import { UserInfo } from "../UserInfo";
import Axios from "axios";

function Courses() {
  const [viewCourses, setViewCourses] = useState({ courses: {} });
  const [disable, setDisable] = useState(true);
  const showCourses = () => {
    Axios.post("http://localhost:4000/viewStudentCourses", {
      studentId: UserInfo.studentId,
    }).then((response) => {
      setViewCourses(response.data);
      console.log(viewCourses);
      setDisable(!disable);
    });
  };
  const attendance = (courseCode) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    Axios.post("http://localhost:4000/attendance", {
      courseCode: courseCode,
      id: UserInfo.studentId,
      date: `${year}-${month}-${day}`,
    }).then((response) => {
      alert(response.data.message);
    });
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container courses animate__animated animate__fadeInUp">
        <button className="btn btn-primary" onClick={showCourses}>
          Show Subjects/Courses
        </button>
        <br />
        <br />
        <br />
        <fieldset className="container">
          <legend>Subjects and Courses</legend>
        </fieldset>
        {Object.keys(viewCourses.courses).map((item, index) => {
          return (
            <>
              <li key={index} className="container li-availableCourses">
                <div>
                  {viewCourses.courses[item].courseCode} -{" "}
                  {viewCourses.courses[item].courseName}
                </div>
                <div>
                  <span className="student-count">
                    {viewCourses.courses[item].courseCode}
                  </span>
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      attendance(viewCourses.courses[item].courseCode)
                    }
                    disabled={disable}
                  >
                    Attendance
                  </button>
                </div>
              </li>
            </>
          );
        })}
        <br />
        <br />
        <br />
        <button
          className="btn btn-info container"
          disabled={disable}
          onClick={() => {
            alert("You are not yet done with your current semester");
          }}
        >
          View Grades
        </button>
      </div>
    </>
  );
}

export default Courses;
