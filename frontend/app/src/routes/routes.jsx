import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Rotas
import LoginUser from "../pages/Login/LoginUser";
import AddPost from "../pages/AddPost/AddPost";
import DeletePost from "../pages/deletePost/DeletePost";
import EditPost from "../pages/EditPost/EditPost";
import AddUser from "../pages/AddUser/AddUser";
import Home from "../pages/Home/Home";
import blogFetch from "../axios/config";
import ViewPost from "../pages/viewPost/ViewPost";

const Router = () => {

    const [userId, setUserId] = useState(localStorage.getItem('blog:token'));

    function updateUserId(user){
      setUserId(user)
    }
  
    async function validateToken() {

        if(!userId) return false;

        try{
            const response = await blogFetch.post('/isToken', {
                token: JSON.parse(userId)
            })

            const { data } = response;

            return data;
        }catch(err){
            localStorage.removeItem('blog:token');
            window.location.assign("/");
        }
    }
    
    function cleanUserId(){
      setUserId(null)
    }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/signup" element={<AddUser />} />

          <Route
            path="/home"
            element={
            <Home
                updateUserId={updateUserId}
                id={userId}
                cleanUserId={cleanUserId}
                validateToken={validateToken}
            />}
          />
          <Route path="/addPost" element={<AddPost 
          updateUserId={updateUserId}
          id={userId}
          cleanUserId={cleanUserId}
          validateToken={validateToken}
          />} />
          <Route path="/deletePost" element={<DeletePost 
          updateUserId={updateUserId}
          id={userId}
          cleanUserId={cleanUserId}
          validateToken={validateToken}
          />} />
          <Route path="/editPost" element={<EditPost 
          updateUserId={updateUserId}
          id={userId}
          cleanUserId={cleanUserId}
          validateToken={validateToken}
          />} />
          <Route path='/viewPost' element={<ViewPost
            updateUserId={updateUserId}
            id={userId}
            cleanUserId={cleanUserId}
            validateToken={validateToken}
          />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
