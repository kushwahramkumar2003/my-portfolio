import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/login";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  return (
    <div>
      <div className="login">
        <div className="login-triangle"></div>
        <h2 className="login-header">Sign in</h2>
        <p className="paraLine">Sign in and managing your Portfolio</p>
        <form className="login-container" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="inputText"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            className="inputText"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="submitBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
