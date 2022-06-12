//* JSX file for the Profile View Page
//* ---------- Imports of react hooks, routers, axios
//* ---------- implements Animate.CSS for minor animations
//* ---------- can enroll to a specific subject/course depending on your Major

import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import auth from "../Auth";
import { UserInfo } from "../UserInfo";
import "animate.css";

function Dashboard({ authorized }) {
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
