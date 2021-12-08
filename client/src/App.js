// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Pages/Dashboard";
import Settings from "./Components/Pages/Settings";
import Test from "./Components/Pages/Test";
import LoginPage from "./Components/LoginPage";
import Error from "./Components/Pages/Error";

function App() {
  const { authorizeUser, setAuthorizeUser } = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard authorized={false} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
