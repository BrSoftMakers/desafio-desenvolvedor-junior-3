/* eslint-disable import/extensions */
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog.jsx';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/blog" element={ <Blog /> } />
    </Routes>

  );
}

export default App;
