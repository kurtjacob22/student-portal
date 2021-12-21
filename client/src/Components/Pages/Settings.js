import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { UserInfo } from "../UserInfo";
import Axios from "axios";

function Settings() {
  const id = UserInfo.studentId;
  useEffect(() => {
    const postData = {
      id,
    };
    Axios.get("http://localhost:4000/viewLogs", postData).then((response) => {
      console.log(response.data);
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
                placeholder="enter previous password"
              />
              <br />
              <input
                type="password"
                name="newPass"
                id="newPass"
                placeholder="enter new password"
              />
              <br />
              <button className="btn btn-primary btn-update-password">
                Update Password
              </button>
            </fieldset>
          </center>
        </fieldset>

        <fieldset className="container ">
          <center>
            <legend className="log-field">Log History</legend>
            <table>
              <br />
              <tr className="table-label">
                <td>Date</td>
                <td>LOCATION</td>
                <td>IP ADDRESS</td>
              </tr>
              <br />
              <tr>
                <td>11:05PM, December 19, 2021</td>
                <td>Manila, Philippines</td>
                <td>192.168.1.128</td>
              </tr>

              <br />
            </table>
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
