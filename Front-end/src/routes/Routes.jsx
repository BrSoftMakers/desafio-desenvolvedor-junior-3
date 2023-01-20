import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/index.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { LoginPage } from "../pages/LoginPage/index.jsx";
import { RegisterPage } from "../pages/RegisterPage/index.jsx";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
            <Route path= "LoginPage" element = {<LoginPage/>} />
            <Route path= "RegisterPage" element = {<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
    )
}