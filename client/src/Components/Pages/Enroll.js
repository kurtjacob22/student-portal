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
  const [displayMajor, setDisplayMajor] = useState({});
  const [displayMinor, setDisplayMinor] = useState({});
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
        console.log(pedCourses);
      });
    } else {
      console.log("3nd year ka na");
    }

    if (UserInfo.yearLevel < 2 && isNSTPCheck) {
      Axios.post("http://localhost:4000/viewAvailableCoursesNSTP", {
        id: collegeId,
        type: "nstp",
      }).then((response) => {
        // console.log(collegeId);
        // console.log(response.data.courses);
        nstpCourses = response.data.courses;
        console.log(nstpCourses);
      });
    } else {
      console.log("2nd year ka na");
    }
  };

  const clearSelection = () => {
    setIsMajorCheck(false);
    setIsMinorCheck(false);
    setIsPEDCheck(false);
    setIsNSTPCheck(false);
    console.log(isMajorCheck, isMinorCheck, isPEDCheck, isNSTPCheck);
  };
  const handleOnChange = (item, func) => {
    func(!item);
    console.log(!item);
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
      </div>
    </>
  );
}

export default Enroll;
