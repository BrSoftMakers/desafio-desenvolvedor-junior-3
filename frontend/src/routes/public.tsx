import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/register';
import Login from '../pages/login';
import PublicLayout from '../layout/Public';

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
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
