import React from "react";
import "../src/App.css";

const Header = () => (
  <header>
    <div className="header-left">
      <h1>NewsHub</h1>
      <hr />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Editor</a>
        </li>
      </ul>
    </div>
    <div className="header-right">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button>Sign Up</button>
      {/* <i class="fa-solid fa-user"></i> */}
    </div>
  </header>
);

export default Header;
