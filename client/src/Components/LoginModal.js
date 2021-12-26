import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import auth from "./Auth";
import { UserInfo } from "./UserInfo";

function LoginModal() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const loginBtn = (e) => {
    // console.log(username);
    // console.log(password);
    e.preventDefault();
    const postData = {
      username,
      password,
    };
    Axios.post("http://localhost:4000/login", postData).then((response) => {
      alert(response.data.message);
      // console.log(response.data);
      if (response.data.login) {
        Axios.get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=76593fbcba7d48e1bb79e86c61d7cd28"
        ).then((response) => {
          const ip = response.data.ip;
          const city = response.data.city;
          const countryName = response.data.country_name;
          const timeAndDate = response.data.time_zone.current_time;
          const logData = { ip, city, countryName, timeAndDate, username };
          Axios.post("http://localhost:4000/logHistory", logData);
        });
        auth.login();
        UserInfo.studentId = response.data.userInfo.studentId;
        UserInfo.surname = response.data.userInfo.surname;
        UserInfo.middlename = response.data.userInfo.middlename;
        UserInfo.firstname = response.data.userInfo.firstname;
        UserInfo.suffix = response.data.userInfo.suffix;
        UserInfo.gender = response.data.userInfo.gender;
        UserInfo.civilStatus = response.data.userInfo.civilStatus;
        UserInfo.citizenship = response.data.userInfo.citizenship;
        UserInfo.registrationStatus = response.data.userInfo.registrationStatus;
        UserInfo.degree = response.data.userInfo.degree;
        UserInfo.collegeId = response.data.userInfo.collegeId;
        UserInfo.yearLevel = response.data.userInfo.yearLevel;
        UserInfo.address = response.data.userInfo.address;
        UserInfo.contactNumber = response.data.userInfo.contactNumber;

        navigate(`/dashboard/1/${UserInfo.studentId * 97 + 1 * 349834 * 6}`);
        // console.log(auth.isAuthenticated());
      } else {
        auth.logout();
        // console.log(auth.isAuthenticated());
      }
    });
  };

  return (
    <div className="modal-container">
      <div className="text-center">
        <br />
        <a href="#login" className="trigger-btn" data-toggle="modal">
          LOGIN
        </a>
      </div>
      <div id="login" className="modal fade">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">LOGIN</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="form-group">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required="required"
                    onInput={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                    onInput={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block btn-lg"
                    onClick={loginBtn}
                    data-dismiss="modal"
                    aria-hidden="false"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
