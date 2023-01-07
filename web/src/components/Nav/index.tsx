import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import pencil from "../../assets/images/pencil.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const goLogin = () => navigate("/");

  const logout = () => {
    localStorage.clear();
    goLogin();
  };

  const Links = (
    <div>
      <a className="home" href="/blog">
        <span>Home</span>
      </a>
      <a className="newPost" href="/editor/post/">
        <span>Novo Post</span>
        <img src={pencil} alt="pencil icon" />
      </a>
      <button type="button" onClick={logout}>
        Sair
      </button>
    </div>
  );
  return (
    <S.Container>
      <a href="/blog">
        <img
          className="logo"
          src="https://vagas.softmakers.com.br/assets/img/logotipo14xxhdpi.png"
          alt="logo"
        />
      </a>
      <S.NavContainer>{Links}</S.NavContainer>

      <S.Menu>
        <S.HamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
          aria-label="Menu"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </S.HamburgerButton>
        <S.Sidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          {Links}
        </S.Sidebar>
      </S.Menu>
    </S.Container>
  );
}
