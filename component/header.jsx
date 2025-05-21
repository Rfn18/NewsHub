import React from "react";
import "../src/App.css";
import { Route, Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="header-left">
      <h1>NewsHub</h1>
      <hr />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Link to="/editor">Editor</Link>
        </li>
      </ul>
    </div>
    <div className="header-right">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {localStorage.getItem("user") ? (
        <Link to="/profile">
          <i className="fa-solid fa-user"></i>
        </Link>
      ) : (
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      )}
    </div>
  </header>
);

export default Header;
