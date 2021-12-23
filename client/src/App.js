// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import LoginPage from "./Components/LoginPage";
import Error from "./Components/Pages/Error";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Enroll from "./Components/Pages/Enroll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard authorized={false} />} />
        <Route
          path="/dashboard/1/"
          element={<Dashboard authorized={false} />}
        />
        <Route
          path="/dashboard/1/:id"
          element={<Dashboard authorized={true} />}
        />
        <Route path="/profile/1/:id" element={<Profile />} />
        <Route path="/settings/1/:id" element={<Settings />} />
        <Route path="/enroll/1/:id" element={<Enroll />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
