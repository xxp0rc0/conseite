import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useForm } from "react-hook-form";

import "./Register.scss";
import Login from "../Login/Login";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [login, setLogin] = useState(true);
  const [flag, setFlag] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let existedMail = JSON.parse(localStorage.getItem("SubmissionEmail"))
    if (!firstName || !email || !password || !lastName) {
      setFlag(true);
    } if (password.length < 8) {
        alert("Password must be at least 8 characters");
        setFlag(true);
    } if (email === existedMail){
        alert('Email is existed.')
    } 
    else {
      setFlag(false);
      localStorage.setItem("SubmissionEmail", JSON.stringify(email));
      localStorage.setItem("SubmissionPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");
      
      setLogin(!login);
    }
  };
  const handleSuccess = () => {
    return (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    );
  }

  return (
    <>
      {login ? (
        <form onSubmit={handleFormSubmit}>
          <div className="register">
            <div>
              <p className="register-title">/ &ensp;register.</p>
            </div>
            <div className="register-desc">
              <p>Please fill the following fields</p>
            </div>
            <div className="register-fistname">
              <Input
                className="register-fistname-input"
                placeholder="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="register-lastname">
              <Input
                className="register-lastname-input"
                placeholder="lastname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="register-email">
              <Input
                className="register-email-input"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-pass">
              <Input
                className="register-pass-input"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="register-btn"
                onClick={handleSuccess}
              >
                create my account
              </button>
              {flag && (
                <p
                  style={{ color: "#E38E91", textAlign: "center" }}
                  variant="danger"
                >
                  Please fill all the fields!
                </p>
              )}
            </div>
          </div>
        </form>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Register;
