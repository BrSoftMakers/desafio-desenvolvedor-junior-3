import React from "react";
import "./styles.css";
import Profile from "../../assets/profile.svg";
import CreatePostModal from "../CreatePostModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";

function PersonInfo() {
  const { clearToken, clearUser, user } = useGlobalContext();
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState('');

  function handleLogout(){
    clearToken();
    clearUser();
    navigate('/');
  }

  return (
    <div className="person__info">
      <img width={148} height={148} src={Profile} alt="Profile"></img>
      <div className="content__info">
        <div className="header__infor">
          <h1>{user.nome}</h1>
          <button 
          className="logout__btn"
          onClick={handleLogout}
          >Sair</button>
        </div>
        <div className="footer__infor">
          <button className="btn__post" onClick={()=> setOpenAdd(true)}>Criar poste</button>
          <button className="btn__post">Meus postes</button>
        </div>
        <CreatePostModal 
          openAdd={openAdd}
          handleClose={()=> setOpenAdd(false)} 
        />
      </div>
    </div>
  );
}

export default PersonInfo;
