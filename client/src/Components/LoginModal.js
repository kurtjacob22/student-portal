import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginModal(props) {
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
      if (response.data.login) {
        // props.hasBeenAuthorized = true;
        navigate("/dashboard");
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
                  <input
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    value="Login"
                    onClick={loginBtn}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
