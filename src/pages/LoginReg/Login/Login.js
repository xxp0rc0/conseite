import TextField from "@mui/material/TextField";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import "./Login.scss";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("SubmissionPassword").replace(/"/g, "");
    let mail = localStorage.getItem("SubmissionEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
//   const handleRedirect = () => {
//     navigate("/");
//   };

  return (
    <div className="login">
      <div>
        <p className="login-title">/ &ensp;log in.</p>
      </div>
      <div className="login-desc">
        <p>Please fill your username and password</p>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div className="login-email">
            <Input
              className="login-email-input"
              placeholder="email"
              required
              type="email"
              onChange={(e) => setEmaillog(e.target.value)}
            />
          </div>
          <div className="login-pass">
            <Input
              className="login-pass-input"
              placeholder="password"
              type="password"
              onChange={(e) => setPasswordlog(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            log in
          </button>
          {flag && (
            <p style={{ color:'#E38E91', textAlign: 'center'}} variant="warning">
              The username or password is incorrect
            </p>
          )}
        </form>
      </div>

      <div>
        <p>
          <span className="login-desc-2">Don’t have an account? </span>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={"/register"}
          >
            Create one now
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default Login;
