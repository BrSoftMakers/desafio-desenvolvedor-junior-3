import './App.css';
import { Route, Routes } from 'react-router';
import { Login } from './pages/login';
import { Posts } from './pages/posts';
import { CriarPost } from './pages/criar';
import { EditarPost } from './pages/editar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" Component={Login} />
        <Route path="/posts" Component={Posts} />
        <Route path="/post/novo" Component={CriarPost} />
        <Route path="/post/{id}" Component={EditarPost} />
      </Routes>
    </div>
  );
}

export default App;
