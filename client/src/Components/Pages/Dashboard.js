import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";

function Dashboard({ authorized }) {
  const { id } = useParams();
  if (authorized === false) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>{id / 9}</h1>
        <button>View Grades</button>
      </div>
    </>
  );
}

export default Dashboard;
