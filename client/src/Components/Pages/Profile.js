import React, { useState } from "react";
import { UserInfo } from "../UserInfo";
import Navbar from "../Navbar";
import Axios from "axios";

function Profile() {
  const [newContact, setNewContact] = useState();
  const id = UserInfo.studentId;
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
  const postData = {
    newContact,
    id,
  };
  const editDetails = () => {
    Axios.post("http://localhost:4000/editContacts", postData).then(
      (response) => {
        UserInfo.contactNumber = response.data.newContactNumber;
        alert(response.data.message);
        // console.log(response.data);
      }
    );
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
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
          <span>Address:</span> {UserInfo.address}
        </span>
        <span className="student-info container">
          <span>Contact Number: </span>
          {UserInfo.contactNumber}
          <a href="#login" className="trigger-btn2" data-toggle="modal">
            Edit
          </a>
        </span>

        <div className="modal-container">
          <div className="text-center">
            <br />
          </div>
          <div id="login" className="modal fade">
            <div className="modal-dialog modal-login">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Contact Number</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#">
                    <div className="form-group">
                      <i className="fa bi-telephone-minus-fill"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="09XX-XXXX-XXX"
                        required="required"
                        onInput={(e) => setNewContact(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block btn-lg"
                        onClick={editDetails}
                        data-dismiss="modal"
                        aria-hidden="false"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
