// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Pages/Dashboard";
import Settings from "./Components/Pages/Settings";
import Test from "./Components/Pages/Test";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <LoginPage />

    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Test />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/settings" element={<Settings />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
