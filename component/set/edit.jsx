import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header";

const Edit = () => {
  const [values, setValues] = useState({
    judul: "",
    isi: "",
    tanggal: "",
    gambar: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/addnews", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

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
                onChange={(e) =>
                  setValues({ ...values, judul: e.target.value })
                }
                required
              />
              <label htmlFor="isi">isi berita</label>
              <input
                type="text"
                name="isi"
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
