import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [values, setValues] = useState({
    judul: "",
    isi: "",
    tanggal: "",
    gambar: "",
  });
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/edit/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
    useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/news/${id}`);
        setNews(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container-editor">
        <div className="editor-box">
          <form onSubmit={handleSubmit} className="form">
            <h2>Add News</h2>
            <div className="input-box">
              <label htmlFor="judul">judul</label>
              <input
                type="text"
                name="judul"
                defaultValue={news.payload?.data[0].judul}
                onChange={(e) =>
                  setValues({ ...values, judul: e.target.value })
                }
                required
              />
              <label htmlFor="isi">isi berita</label>
              <input
                type="text"
                name="isi"
                defaultValue={news.payload?.data[0].isi}
                onChange={(e) => setValues({ ...values, isi: e.target.value })}
                required
              />
              <label htmlFor="tanggal">tanggal terbit</label>
              <input
                type="date"
                name="tanggal"
                onChange={(e) =>
                  setValues({ ...values, tanggal: e.target.value })
                }
                required
              />
              <label htmlFor="gambar">url gambar</label>
              <input
                type="text"
                name="gambar"
                defaultValue={news.payload?.data[0].gambar}
                onChange={(e) =>
                  setValues({ ...values, gambar: e.target.value })
                }
                required
              />
            </div>
            <button className="add">Add News</button>
            <Link to="/" className="back">
              back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
