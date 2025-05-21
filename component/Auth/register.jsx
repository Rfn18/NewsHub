import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [values, setValues] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/register", values)
      .then((res) => {
        console.log(res);
        navigate("NewsHub/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-auth">
      <div className="form-box" id="register-form">
        <form onSubmit={handleSubmit} className="form">
          <h2>Register</h2>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setValues({ ...values, nama: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
          </div>
          <button name="register">Register</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
