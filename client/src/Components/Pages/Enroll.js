import React, { useState } from "react";
import Navbar from "../Navbar";
import { UserInfo } from "../UserInfo";
import Axios from "axios";

function Enroll() {
  const [isMajorCheck, setIsMajorCheck] = useState(false);
  const [isMinorCheck, setIsMinorCheck] = useState(false);
  const [isPEDCheck, setIsPEDCheck] = useState(false);
  const [isNSTPCheck, setIsNSTPCheck] = useState(false);
  const collegeId = UserInfo.collegeId;
  const [displayMajor, setDisplayMajor] = useState({ majorCourses: {} });
  const [displayMinor, setDisplayMinor] = useState({ minorCourses: {} });
  const [displayPED, setDisplayPED] = useState({ pedCourses: {} });
  const [displayNSTP, setDisplayNSTP] = useState({ nstpCourses: {} });
  let majorCourses = {};
  let minorCourses = {};
  let pedCourses = {};
  let nstpCourses = {};

  const viewAvailableCourses = () => {
    if (isMajorCheck) {
      Axios.post("http://localhost:4000/viewAvailableCourses", {
        id: collegeId,
        type: "major",
      }).then((response) => {
        // console.log(collegeId);
        // console.log(response.data.courses);
        majorCourses = response.data.courses;
        setDisplayMajor({ majorCourses });
        console.log(displayMajor);
      });
    }
    if (isMinorCheck) {
      Axios.post("http://localhost:4000/viewAvailableCoursesMinor", {
        id: collegeId,
        type: "minor",
      }).then((response) => {
        // console.log(collegeId);
        // console.log(response.data.courses);
        minorCourses = response.data.courses;
        setDisplayMinor({ minorCourses });
        console.log(displayMinor);
      });
    }
    if (UserInfo.yearLevel < 3 && isPEDCheck) {
      Axios.post("http://localhost:4000/viewAvailableCoursesPED", {
        id: collegeId,
        type: "ped",
      }).then((response) => {
        // console.log(collegeId);
        // console.log(response.data.courses);
        pedCourses = response.data.courses;
        setDisplayPED({ pedCourses });
        console.log(displayPED);
      });
    } else {
      displayPED.pedCourses.message = "You already finished PE";
      console.log(displayPED.pedCourses.message);
    }

    if (UserInfo.yearLevel < 2 && isNSTPCheck) {
      Axios.post("http://localhost:4000/viewAvailableCoursesNSTP", {
        id: collegeId,
        type: "nstp",
      }).then((response) => {
        // console.log(collegeId);
        // console.log(response.data.courses);
        nstpCourses = response.data.courses;
        setDisplayNSTP({ nstpCourses });
        console.log(displayNSTP);
      });
    } else {
      displayNSTP.nstpCourses.message = "You already finished NSTP";
      console.log(displayNSTP.nstpCourses.message);
    }
  };

  const clearSelection = () => {
    setIsMajorCheck(false);
    setIsMinorCheck(false);
    setIsPEDCheck(false);
    setIsNSTPCheck(false);
    setDisplayMajor({ majorCourses: {} });
    setDisplayMinor({ minorCourses: {} });
    console.log(isMajorCheck, isMinorCheck, isPEDCheck, isNSTPCheck);
  };
  const handleOnChange = (item, func) => {
    func(!item);

    console.log(!item);
  };

  const enrollButton = (courseInfo) => {
    if (courseInfo.studentCount !== 50) {
      console.log(courseInfo);

      Axios.post("http://localhost:4000/enroll", {
        courseCode: courseInfo.courseCode,
        studentCount: courseInfo.studentCount,
        id: UserInfo.studentId,
        collegeId: courseInfo.studentCount,
        courseName: courseInfo.courseName,
      }).then((response) => {
        console.log(response.data);
        alert(response.data.message);
      });
    } else {
      alert("maximum of 50 students has been reached");
    }
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="settings container">
        <center>
          <h1 className="enroll-title">ENROLLMENT</h1>
          <input
            type="checkbox"
            name="courses"
            value="major"
            checked={isMajorCheck}
            onChange={() => handleOnChange(isMajorCheck, setIsMajorCheck)}
          />
          Major Subjects
          <br />
          <input
            type="checkbox"
            name="courses"
            value="minor"
            checked={isMinorCheck}
            onChange={() => handleOnChange(isMinorCheck, setIsMinorCheck)}
          />
          Minor Subjects
          <br />
          <input
            type="checkbox"
            name="courses"
            value="ped"
            checked={isPEDCheck}
            onChange={() => handleOnChange(isPEDCheck, setIsPEDCheck)}
          />
          PE Subjects
          <br />
          <input
            type="checkbox"
            name="courses"
            value="nstp"
            checked={isNSTPCheck}
            onChange={() => handleOnChange(isNSTPCheck, setIsNSTPCheck)}
          />
          NSTP Subjects
          <br />
          <button className="btn btn-danger" onClick={clearSelection}>
            Clear Selection
          </button>
          <br />
          <button className="btn btn-primary" onClick={viewAvailableCourses}>
            View Available Courses/Subjects
          </button>
        </center>
        <br />
        <br />
        <fieldset className="container">
          <legend>Major Subjects</legend>

          {Object.keys(displayMajor.majorCourses).map((item, index) => {
            return (
              <>
                <li key={index} className="container li-availableCourses">
                  <div>
                    {displayMajor.majorCourses[item].courseCode} -{" "}
                    {displayMajor.majorCourses[item].courseName}
                  </div>
                  <div>
                    <span className="student-count">
                      {displayMajor.majorCourses[item].studentCount}/50
                    </span>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        enrollButton(displayMajor.majorCourses[item])
                      }
                    >
                      Enroll
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </fieldset>
        <br />
        <br />
        <fieldset className="container">
          <legend>Minor Subjects</legend>

          {Object.keys(displayMinor.minorCourses).map((item, index) => {
            return (
              <>
                <li key={index} className="container li-availableCourses">
                  <div>
                    {displayMinor.minorCourses[item].courseCode} -{" "}
                    {displayMinor.minorCourses[item].courseName}
                  </div>
                  <div>
                    <span className="student-count">
                      {displayMinor.minorCourses[item].studentCount}/50
                    </span>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        enrollButton(displayMinor.minorCourses[item])
                      }
                    >
                      Enroll
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </fieldset>
        <br />
        <br />
        <fieldset className="container">
          <legend>PED Subjects</legend>

          {Object.keys(displayPED.pedCourses).map((item, index) => {
            if (UserInfo.yearLevel < 3 && isPEDCheck) {
              return (
                <>
                  <li key={index} className="container li-availableCourses">
                    <div>
                      {displayPED.pedCourses[item].courseCode} -{" "}
                      {displayPED.pedCourses[item].courseName}
                    </div>
                    <div>
                      <span className="student-count">
                        {displayPED.pedCourses[item].studentCount}/50
                      </span>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          enrollButton(displayPED.pedCourses[item])
                        }
                      >
                        Enroll
                      </button>
                    </div>
                  </li>
                </>
              );
            } else {
              return <>{displayPED.pedCourses.message}</>;
            }
          })}
        </fieldset>{" "}
        <br />
        <br />
        <fieldset className="container">
          <legend>NSTP Subjects</legend>

          {Object.keys(displayNSTP.nstpCourses).map((item, index) => {
            if (UserInfo.yearLevel < 2 && isNSTPCheck) {
              return (
                <>
                  <li key={index} className="container li-availableCourses">
                    <div>
                      {displayNSTP.nstpCourses[item].courseCode} -{" "}
                      {displayNSTP.nstpCourses[item].courseName}
                    </div>
                    <div>
                      <span className="student-count">
                        {displayNSTP.nstpCourses[item].studentCount}/50
                      </span>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          enrollButton(displayNSTP.nstpCourses[item])
                        }
                      >
                        Enroll
                      </button>
                    </div>
                  </li>
                </>
              );
            } else {
              return <>{displayNSTP.nstpCourses.message}</>;
            }
          })}
        </fieldset>
      </div>
    </>
  );
}

export default Enroll;
