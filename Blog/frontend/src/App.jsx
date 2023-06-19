
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog.jsx';
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/blog" element={ <Blog /> } />
    </Routes>
    </BrowserRouter>

  )
}

export default App
