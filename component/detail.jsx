import axios from "axios";
import { useState, useEffect } from "react";
import "../src/App.css";
import Header from "./header";
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      <div className="detail-container">
        <div className="detail-box">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2166133125.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
            alt="d-i"
          />
          <div className="trend-from">
            <i className="fa-solid fa-user"></i>
            <p>Admin</p> - <p>October 10, 2025</p>
          </div>
          <h1>
            Italy changes law on right to claim citizenship through
            great-grandparents
          </h1>
          <p>
            The Italian government has this week enacted a law that makes it
            impossible for anyone to get Italian citizenship through their
            great-grandparents...
          </p>
          <Link to={`/edit/${id}`}>
            <button className="edit-button">edit</button>
          </Link>
          <button className="delete-button" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
