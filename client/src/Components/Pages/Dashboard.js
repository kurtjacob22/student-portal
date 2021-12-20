import React from "react";
import { Navigate, useParams, useEffect } from "react-router-dom";
import Navbar from "../Navbar";
import auth from "../Auth";
import { UserInfo } from "../UserInfo";

function Dashboard({ authorized }) {
  const { id } = useParams();
  if (!auth.isAuthenticated() && authorized === false) {
    return <Navigate to="/login" />;
  } else if (UserInfo.studentId === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>{UserInfo.studentId}</h1>
        <h1>{UserInfo.surname}</h1>
        <h1>{UserInfo.middlename}</h1>
        <h1>{UserInfo.firstname}</h1>
        <h1>{UserInfo.suffix}</h1>
        <h1>{UserInfo.gender}</h1>
        <h1>{UserInfo.civilStatus}</h1>
        <h1>{UserInfo.citizenship}</h1>
        <h1>{UserInfo.registrationStatus}</h1>
        <h1>{UserInfo.degree}</h1>
        <h1>{UserInfo.collegeId}</h1>
        <h1>{UserInfo.yearLevel}</h1>
        <h1>{UserInfo.birthDay}</h1>
        <h1>{UserInfo.address}</h1>
        <h1>{UserInfo.contactNumber}</h1>
        <h1>{UserInfo.attendanceKey}</h1>
        <button>View Grades</button>
      </div>
    </>
  );
}

export default Dashboard;
