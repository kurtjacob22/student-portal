// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Pages/Dashboard";
import Settings from "./Components/Pages/Settings";
import Test from "./Components/Pages/Test";
import LoginPage from "./Components/LoginPage";
import Error from "./Components/Pages/Error";
import auth from "./Components/Auth";
import axios from "axios";

function App() {
  let userLog = auth.isAuthenticated();
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:4000/userAuthorized").then((response) => {
      console.log("userLog: " + userLog);
      console.log("response.data.authorized: " + response.data.authorized);
      setIsUserAuthorized(response.data.authorized);
      console.log("isUserAuthorized: " + isUserAuthorized);
    });
  });
  // console.log(userLog, isUserAuthorized);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard authorized={true} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
