import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import auth from "../Auth";
import { UserInfo } from "../UserInfo";
import "animate.css";

function Dashboard({ authorized }) {
  // const { id } = useParams();

  if (!auth.isAuthenticated() && authorized === false) {
    return <Navigate to="/login" />;
  } else if (UserInfo.studentId === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-name-intro">
          <span className="animate__animated animate__fadeInUp">
            Hi {UserInfo.firstname}!
          </span>
        </div>
        <SearchBar />
      </div>
    </>
  );
}

export default Dashboard;
