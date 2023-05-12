import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layout/Public';
import Register from '../pages/register';
import Login from '../pages/login';
import Home from '../pages/home';
import PrivateLayout from '../components/layout/Private';

export function Router() {
  return (
    <Routes>
      <Route
        path="/cadastro"
        element={
          <PublicLayout>
            <Register />
          </PublicLayout>
        }
      />
      <Route
        path="/login"
        element={
          <PublicLayout>
            <Login />
          </PublicLayout>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />

      {/* private routes */}

      <Route
        path="/home"
        element={
          <PrivateLayout>
            <Home />
          </PrivateLayout>
        }
      />
    </Routes>
  );
}
