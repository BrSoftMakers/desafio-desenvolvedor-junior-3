import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostDetail from "./components/PostDetail";
import useGlobalContext from "./hooks/useGlobalContext";

function ProtectedRoutes({ redirectTo }){
  const { token } = useGlobalContext();

  return token ? <Outlet /> : <Navigate to={ redirectTo } />
}


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path='/main' element={<Main />} />
        <Route path='/detailpost/:id' element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
