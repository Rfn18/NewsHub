import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "../component/Auth/login.jsx";
import Register from "../component/Auth/register.jsx";
import Profile from "../component/profile.jsx";
import Editor from "../component/set/editor.jsx";
import Card from "../component/card.jsx";
import Detail from "../component/detail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/NewsHub/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/card" element={<Card />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
