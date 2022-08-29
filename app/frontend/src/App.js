import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/login';
import Cadastro from './Pages/cadastro';
import Blog from './Pages/blog';
import MyPosts from './Pages/MyPosts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Cadastro/> } />
        <Route path="/posts" element={ <Blog /> } />
        <Route path="/myPosts" element={ <MyPosts /> } />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
