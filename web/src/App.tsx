import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
