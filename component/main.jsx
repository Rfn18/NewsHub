import "../src/App.css";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import { Link } from "react-router-dom";

const Utama = () => {
  const [news, setNews] = useState([]);

  const formatTanggal = (tanggal) => {
    return dayjs(tanggal).format("DD MMMM YYYY");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/news")
      .then((res) => {
        setNews(res.data.payload.data);
        console.log(res.data.payload.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <div className="welcome">
        <p>WELCOME TO NEWSHUB</p>
        <h1>
          Craft narratives <i className="fa-solid fa-signature"></i>, that
          ignite
          <span> Knowledge </span> <i className="fa-solid fa-book"></i>, and
          <span> entertaiment </span>
          <i className="fa-solid fa-clapperboard"></i>
        </h1>
      </div>

      <div className="trend-content">
        <img
          src="https://vfxblog.com/wp-content/uploads/2019/11/bfb30-096_0010_wvg_v182_1069ab.jpg?w=1200&h=773"
          alt="n-i"
        />
        <div className="trend-text">
          <div className="trend-from">
            <i className="fa-solid fa-user"></i>
            <p>Admin</p> - <p>October 10, 2025</p>
          </div>
          <h3 className="news-title">
            Blade Runner 2049: The Future of Visual Effects
          </h3>
          <p className="news-content">
            The visual effects in Blade Runner 2049 are a testament to the power
            of technology and creativity in filmmaking.
          </p>
        </div>
      </div>

      <div className="news">
        <h1>Latest News</h1>
        <div className="news-main-content">
          {news.map((item) => (
            <>
              <Card />
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Utama;
