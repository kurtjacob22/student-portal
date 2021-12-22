import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import { UserInfo } from "../UserInfo";
import Axios from "axios";

function Settings() {
  const id = UserInfo.studentId;
  const logHistory = useRef({});
  useEffect(() => {
    const postData = {
      id,
    };
    Axios.post("http://localhost:4000/viewLogs", postData).then((response) => {
      const logs = response.data.logData;
      // const logLength = response.data.logData.length;
      logHistory.current = response.data.logData;
      // for (var i = 0; i <= logLength; i++) {
      //   LogHistory[i].dateLog = logs[logLength - i].dateLog;
      //   LogHistory[i].location = logs[logLength - i].location;
      //   LogHistory[i].ipAddress = logs[logLength - i].ipAddress;
      // }
      // console.log(logHistory.current.logs[0].studentId);
    });
  });
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="settings">
        <div className="container settings-title">SETTINGS</div>
        <fieldset className="container">
          <legend className="utility-title">
            {" "}
            Change Your Password Utility{" "}
          </legend>
          <label className="label1-util">
            You can now personalize your user password to make it easier for you
            to remember. However, you should ensure that it is not too easy for
            anyone else to guess!{" "}
            <span className="span-util">
              Your password must be at least 8-20 characters long only.
            </span>{" "}
            Making your password difficult for anyone else to crack will secure
            your CRS data.
          </label>
          <label className="label2-util">
            <a href="http://www.bu.edu/infosec/howtos/how-to-choose-a-password/">
              Choosing Good Passwords
            </a>
          </label>
          <center>
            <fieldset className="change-password-field">
              <legend className="change-pass-title">
                Student Number: {UserInfo.studentId}
              </legend>
              <input
                type="password"
                name="prevPass"
                id="prevPass"
                className="form-control container"
                placeholder="enter previous password"
              />
              <br />
              <input
                type="password"
                name="newPass"
                id="newPass"
                className="form-control container"
                placeholder="enter new password"
              />
              <br />
              <button className="btn btn-primary btn-update-password">
                Update Password
              </button>
            </fieldset>
          </center>
        </fieldset>
        <fieldset className="container">
          <center>
            <legend className="log-field">Log History</legend>

            {logHistory.current.map((item, index) => {
              return (
                <>
                  <span>{item.logData}</span>
                  <span>{index}</span>
                </>
              );
            })}

            <div className="container log-data"></div>

            <button className="btn btn-primary btn-delete-history">
              Delete History
            </button>
          </center>
        </fieldset>
      </div>
    </>
  );
}

export default Settings;
