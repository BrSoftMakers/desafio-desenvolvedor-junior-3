import React from "react";
import { Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/post/:id" element={<Post />} />
      <Route path="/editor/post/" element={<Editor />} />
      <Route path="/editor/post/:id" element={<Editor />} />
    </Routes>
  );
}
