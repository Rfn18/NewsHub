import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const Card = () => {
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
    <>
      {news.map((item) => (
        <div className="news-card" key={item.id_berita}>
          <img src={item.gambar} alt="n-i" />
          <div className="text-from">
            <i className="fa-solid fa-user"></i>
            <p>Admin</p> - <p>{formatTanggal(item.tanggal)}</p>
          </div>
          <Link className="judul-home" to={`/detail/${item.id_berita}`}>
            <h3 className="news-title">{item.judul}</h3>
          </Link>
          <p className="news-content">{item.isi}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
