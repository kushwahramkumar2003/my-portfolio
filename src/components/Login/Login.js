import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/login",
        requestOptions
      );
      console.log(response);

      if (response.status != 200) throw new Error("Email password not match");
      //   const data = await response.json();

      //   // Now you can access the 'admin' data
      //   console.log("Admin data:", data.admin);

      navigate("/dashbord");
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
