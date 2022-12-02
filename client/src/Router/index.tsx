import { Login } from "../Pages/Login";
import { Register } from "../Pages/register";
import { Dashboard } from "../Pages/Dashboard";
import { Routes, Route } from 'react-router-dom'

 function Router(){
    return(
        
    
        <Routes>
          <Route path="/"  element={<Login />}/>
          <Route path="/register"  element={<Register />}/>
          <Route path="/dashboard"  element={<Dashboard />}/>
        </Routes>


    )
}

export default Router