import React from "react";
import "../src/App.css";

const Utama = () => (
  <main>
    <div className="welcome">
      <p>WELCOME TO NEWSHUB</p>
      <h1>
        Craft narratives <i class="fa-solid fa-signature"></i>, that ignite
        <span> Knowledge </span> <i class="fa-solid fa-book"></i>, and
        <span> entertaiment </span>
        <i class="fa-solid fa-clapperboard"></i>
      </h1>
    </div>
    <div className="trend-content">
      <img
        src="https://vfxblog.com/wp-content/uploads/2019/11/bfb30-096_0010_wvg_v182_1069ab.jpg?w=1200&h=773"
        alt="n-i"
      />
      <div className="trend-text">
        <div className="trend-from">
          <i class="fa-solid fa-user"></i>
          <p>Admin</p> - <p>October 10, 2025</p>
        </div>
        <h3 className="news-title">
          Blade Runner 2049: The Future of Visual Effects
        </h3>
        <p className="news-content">
          The visual effects in Blade Runner 2049 are a testament to the power
          of technology and creativity in filmmaking. The film's stunning
          visuals transport viewers to a dystopian future, showcasing the
          potential of visual effects to create immersive worlds.
        </p>
      </div>
    </div>
  </main>
);

export default Utama;
