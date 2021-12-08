import React from "react";
import { Navigate } from "react-router-dom";

function Dashboard({ authorized }) {
  // const { id } = useParams();
  if (!authorized) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="dashboard">
      <h1>Hello user!</h1>
    </div>
  );
}

export default Dashboard;
