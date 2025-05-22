import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", values)
      .then((res) => {
        console.log(res);
        if (res.data.payload.statusCode === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          alert("Login successful");
          navigate("/");
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => console.error(err) );
  };

  return (
    <div className="container-auth">
      <div className="form-box" id="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
          />
          
          <button type="submit" name="Login">
            Login
          </button>
          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
