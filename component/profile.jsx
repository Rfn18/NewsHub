import { Link, useNavigate } from "react-router-dom";
import "../src/App.css";
import Header from "./header";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-box">
          <i className="fa-solid fa-user"></i>
          <h1>{user.payload.data[0].nama}</h1>
          <p>{user.payload.data[0].email}</p>
          <button onClick={handleLogout}>logout</button>
          <Link to="/">
            <p>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Profile;
