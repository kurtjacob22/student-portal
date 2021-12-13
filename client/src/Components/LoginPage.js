import React from "react";
import LoginModal from "./LoginModal";

function LoginPage() {
  // const getUserAuthorize = () => {
  //   props.hasBeenAuthorized;
  // };
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
