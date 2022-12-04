import { Login } from "../Pages/Login";
import { Register } from "../Pages/register";
import { Dashboard } from "../Pages/Dashboard";
import { Routes, Route, Navigate } from 'react-router-dom'
import { Blog } from "../Pages/Blog";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/auth";
import { BlogInfo } from "../Pages/BlogInfo";
import { UpdateBlog } from "../Pages/UpdateBlog";

function Router() {
  const { auth } = useContext(AuthContext)
  
  return (


    <Routes>
      <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Login />}></Route>
      <Route path="/register" element={auth ? <Navigate to="/dashboard" /> : <Register />} />
      <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/blog" element={auth ? <Blog /> : <Navigate to="/" />} />
      <Route path="/blog-info" element={auth ? <BlogInfo /> : <Navigate to="/" />} />
      <Route path="/update-blog" element={auth ? <UpdateBlog /> : <Navigate to="/" />} />
    </Routes>


  )
}

export default Router