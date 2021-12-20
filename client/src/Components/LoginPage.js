import React, { useEffect } from "react";
import LoginModal from "./LoginModal";
import { UserInfo } from "./UserInfo";

function LoginPage() {
  useEffect(() => {
    UserInfo.studentId = null;
    UserInfo.surname = null;
    UserInfo.middlename = null;
    UserInfo.firstname = "";
    UserInfo.suffix = null;
    UserInfo.gender = null;
    UserInfo.civilStatus = null;
    UserInfo.citizenship = null;
    UserInfo.registrationStatus = null;
    UserInfo.degree = null;
    UserInfo.collegeId = null;
    UserInfo.yearLevel = null;
    UserInfo.birthDay = null;
    UserInfo.address = null;
    UserInfo.contactNumber = null;
    UserInfo.attendanceKey = null;
  });
  return (
    <div className="login-bg">
      <div className="title">
        <span className="display-3 custom-title">STUDENT PORTAL</span>
        <span className="custom-subtitle">
          PAMANTASAN NG LUNGSOD NG MAYNILA
        </span>
        <LoginModal />
      </div>
    </div>
  );
}

export default LoginPage;
