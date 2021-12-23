import React, { useState } from "react";
import Navbar from "../Navbar";
import { UserInfo } from "../UserInfo";
import Axios from "axios";

function Settings() {
  const id = UserInfo.studentId;
  // const logHistory = useRef({});
  // let logs = {};
  const [dataHistory1, setDataHistory1] = useState("");
  const [dataHistory2, setDataHistory2] = useState("");
  const [dataHistory3, setDataHistory3] = useState("");
  const [dataHistory4, setDataHistory4] = useState("");
  const [dataHistory5, setDataHistory5] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const updatePassword = () => {
    const postData = { id, newPassword };
    if (newPassword !== currentPassword) {
      Axios.post("http://localhost:4000/updatePassword", postData).then(
        (response) => {
          alert(response.data.message);
        }
      );
    } else {
      alert("Please Enter a Valid Password");
    }
  };

  const deleteLogs = () => {
    const postData = { id };
    Axios.post("http://localhost:4000/deleteLogs", postData).then(
      (response) => {
        alert(response.data.message);
      }
    );
  };

  const viewLogs = () => {
    const postData = { id };
    Axios.post("http://localhost:4000/viewLogs", postData).then((response) => {
      // logs = response.data.logData;
      const logLength = response.data.logData.length - 1;
      // logHistory.current = { logs };

      if (response.data.logData[logLength] !== undefined) {
        setDataHistory1(response.data.logData[logLength]);
      }
      if (response.data.logData[logLength - 1] !== undefined) {
        setDataHistory2(response.data.logData[logLength - 1]);
      }
      if (response.data.logData[logLength - 2] !== undefined) {
        setDataHistory3(response.data.logData[logLength - 2]);
      }
      if (response.data.logData[logLength - 3] !== undefined) {
        setDataHistory4(response.data.logData[logLength - 3]);
      }
      if (response.data.logData[logLength - 4] !== undefined) {
        setDataHistory5(response.data.logData[logLength - 4]);
      }
      // console.log(dataHistory1);
      // console.log(logHistory.current.logs[0].studentId);
      // console.log(logHistory);
    });
  };
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
                onInput={(e) => setCurrentPassword(e.target.value)}
              />
              <br />
              <input
                type="password"
                name="newPass"
                id="newPass"
                className="form-control container"
                placeholder="enter new password"
                onInput={(e) => setNewPassword(e.target.value)}
              />
              <br />
              <button
                className="btn btn-primary btn-update-password"
                onClick={updatePassword}
              >
                Update Password
              </button>
            </fieldset>
          </center>
        </fieldset>
        <fieldset className="container">
          <center>
            <legend className="log-field">Log History</legend>
            <button className="btn btn-primary" onClick={viewLogs}>
              View History
            </button>
            <br />
            <br />
            <br />
            <table>
              <tr className="log-label">
                <td>Date/Time</td>
                <td>Location</td>
                <td>IP Address</td>
              </tr>
              <tr className="log-label">
                <td>{dataHistory1.dateLog}</td>
                <td>{dataHistory1.location}</td>
                <td>{dataHistory1.ipAddress}</td>
              </tr>
              <tr className="log-label">
                <td>{dataHistory2.dateLog}</td>
                <td>{dataHistory2.location}</td>
                <td>{dataHistory2.ipAddress}</td>
              </tr>
              <tr className="log-label">
                <td>{dataHistory3.dateLog}</td>
                <td>{dataHistory3.location}</td>
                <td>{dataHistory3.ipAddress}</td>
              </tr>
              <tr className="log-label">
                <td>{dataHistory4.dateLog}</td>
                <td>{dataHistory4.location}</td>
                <td>{dataHistory4.ipAddress}</td>
              </tr>
              <tr className="log-label">
                <td>{dataHistory5.dateLog}</td>
                <td>{dataHistory5.location}</td>
                <td>{dataHistory5.ipAddress}</td>
              </tr>
            </table>

            <button
              className="btn btn-primary btn-delete-history"
              onClick={deleteLogs}
            >
              Delete History
            </button>
          </center>
        </fieldset>
      </div>
    </>
  );
}

export default Settings;
