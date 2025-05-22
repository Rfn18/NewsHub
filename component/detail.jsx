import axios from "axios";
import { useState, useEffect } from "react";
import "../src/App.css";
import Header from "./header";
import { Link, useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const formatTanggal = (tanggal) => {
    return dayjs(tanggal).format("DD MMMM YYYY");
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/news/${id}`);
        setItem(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) {
    return <p>Loading berita...</p>;
  }
  console.log(item.payload.data[0]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      alert("Delete successful");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="detail-container" key={item.payload.data[0].id_berita}>
        <div className="detail-box">
          <img src={item.payload.data[0].gambar} alt="d-i" />
          <div className="trend-from">
            <i className="fa-solid fa-user"></i>
            <p>Admin</p> - <p>{formatTanggal(item.payload.data[0].tanggal)}</p>
          </div>
          <h1>{item.payload.data[0].judul}</h1>
          <p>{item.payload.data[0].isi}</p>
          <Link to={`/edit/${id}`}>
            <button className="edit-button">edit</button>
          </Link>
          <Link to={`/delete/${id}`}>
          <button className="delete-button" onClick={handleDelete}>
            delete
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
