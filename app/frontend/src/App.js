import { Route, Routes, Navigate } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import PostForm from './components/PostForm';
import Login from './routes/Login';
import Posts from './routes/Posts';
import Register from './routes/Resgister';
import SinglePost from './routes/SinglePost';
import UserPosts from './routes/UserPosts';

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <h1 className="text-center">
        <strong>✨ Fantastic Posts ✨</strong>
      </h1>
      <h2 className="text-center">
        as notícias mais reais que você vai encontrar
      </h2>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/my-posts" element={<UserPosts />} />
        <Route path="/my-posts/:id" element={<SinglePost />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/update/:id" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
