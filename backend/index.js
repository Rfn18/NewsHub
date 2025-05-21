const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const response = require("./component/response");
const db = require("./component/connection");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  const sql = "SELECT * FROM user_data";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.json(result);
    }
  });
});

app.post("/register", (req, res) => {
  const { nama, email, password } = req.body;
  const sql = "INSERT INTO user_data (nama, email, password) VALUES (?, ?, ?)";
  db.query(sql, [nama, email, password], (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else if (result && result.affectedRows > 0) {
      response(200, result, "User registered successfully", res);
    } else {
      response(401, null, "Invalid credentials", res);
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM user_data WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else if (result && result.length > 0) {
      response(200, result, "Login successful", res);
    } else {
      response(401, null, "Invalid credentials", res);
    }
  });
});

app.post("/addnews", (req, res) => {
  const { judul, isi, tanggal, gambar } = req.body;
  const sql =
    "INSERT INTO news (judul, isi, tanggal, gambar) VALUES (?, ?, ?, ?)";
  db.query(sql, [judul, isi, tanggal, gambar], (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else if (result && result.affectedRows > 0) {
      response(200, result, "News added successfully", res);
    } else {
      response(401, null, "Invalid credentials", res);
    }
  });
});

app.get("/news", (req, res) => {
  const sql = "SELECT * FROM news";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else {
      response(200, result, "Data retrieved successfully", res);
    }
  });
});

app.get("/news/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM news WHERE id_berita = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else if (result && result.length > 0) {
      response(200, result, "Data retrieved successfully", res);
    } else {
      response(401, null, "Invalid credentials", res);
    }
  });
});

app.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { judul, isi, tanggal, gambar } = req.body;
  const sql =
    "UPDATE news SET judul = ?, isi = ?, tanggal = ?, gambar = ? WHERE id_berita = ?";
  db.query(sql, [judul, isi, tanggal, gambar, id], (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else if (result && result.affectedRows > 0) {
      response(200, result, "News updated successfully", res);
    } else {
      response(401, null, "Invalid credentials", res);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM news WHERE id_berita = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Error retrieving data", res);
    } else if (result && result.affectedRows > 0) {
      response(200, result, "News deleted successfully", res);
    } else {
      response(401, null, "Invalid credentials", res);
    }
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
