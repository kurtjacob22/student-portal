import React from "react";
import { UserInfo } from "../UserInfo";
import Navbar from "../Navbar";

function Profile() {
  const checkCollege = (collegeId) => {
    if (collegeId === 1) {
      return "College of Engineering and Technology";
    } else if (collegeId === 2) {
      return "College of Humanities, Arts and Social Sciences";
    } else if (collegeId === 3) {
      return "College of Education";
    } else if (collegeId === 4) {
      return "College of Nursing";
    } else if (collegeId === 5) {
      return "PLM Business School";
    } else if (collegeId === 6) {
      return "College of Architecture and Urban Planning";
    } else if (collegeId === 7) {
      return "College of Physical Therapy";
    } else if (collegeId === 8) {
      return "College of Science";
    }
  };
  const editDetails = (info) => {
    if (info === "birthday") {
      alert("birthday");
    } else if (info === "contacts") {
      alert("contacts");
    } else {
      alert("password");
    }
  };
  return (
    <>
      <Navbar />

      <div className="profile">
        <span className="student-info container">
          <span>Student ID:</span> {UserInfo.studentId}
        </span>
        <span className="student-info container">
          <span>Last Name: </span>
          {UserInfo.surname}
        </span>
        <span className="student-info container">
          <span>Middle Name: </span>
          {UserInfo.middlename}
        </span>
        <span className="student-info container">
          <span>First Name:</span> {UserInfo.firstname}
        </span>
        <span className="student-info container">
          <span>Suffix:</span> {UserInfo.suffix}
        </span>
        <span className="student-info container">
          <span>Gender:</span> {UserInfo.gender}
        </span>
        <span className="student-info container">
          <span>Civil Status:</span> {UserInfo.civilStatus}
        </span>
        <span className="student-info container">
          <span>Citizenship:</span> {UserInfo.citizenship}
        </span>
        <span className="student-info container">
          <span>Registration Status:</span>
          {UserInfo.registrationStatus ? "Regular" : "Irregular"}
        </span>
        <span className="student-info container">
          <span>Degree:</span> {UserInfo.degree}
        </span>
        <span className="student-info container">
          <span>College:</span> {checkCollege(UserInfo.collegeId)}
        </span>
        <span className="student-info container">
          <span>Year Level:</span> {UserInfo.yearLevel}
        </span>
        <span className="student-info container">
          <span>Birthday:</span> {UserInfo.birthDay}{" "}
          <button
            className="edit-button"
            onClick={() => editDetails("birthday")}
          >
            EDIT
          </button>
        </span>
        <span className="student-info container">
          <span>Address:</span> {UserInfo.address}
        </span>
        <span className="student-info container">
          <span>Contact Number: </span>
          {UserInfo.contactNumber}
          <button
            className="edit-button"
            onClick={() => editDetails("contacts")}
          >
            EDIT
          </button>
        </span>
        <span className="student-info container">
          <span>Password:</span> ***********
          <button
            className="edit-button"
            onClick={() => editDetails("pasword")}
          >
            EDIT
          </button>
        </span>
      </div>
    </>
  );
}

export default Profile;
