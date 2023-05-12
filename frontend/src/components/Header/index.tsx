import user from '../../assets/images/notfounduser.jpg';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import Button from '../Button';
import AuthService from '../../service/AuthService';
import TostifyService from '../../service/TostifyService';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import NavBar from '../NavBar';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';

export default function Header() {
  const authService = new AuthService();
  const notification = new TostifyService();
  const navigate = useNavigate();

  const {
    orderBy,
    setOrderBy,
    windowSize: { width },
    setFilterPosts,
  } = useContext(AppContext);

  const handleBtn = () => {
    navigate('/criar-post');
  };

  const handleOrderBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderBy?.(event.target.checked ? 'true' : 'false');
  };

  const handleLogout = () => {
    authService.logout();
    notification.sucess('Usuário deslogado.');
    setFilterPosts?.(false);
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.actionsContainer}>
        {typeof width === 'number' && width > 720 ? <NavBar /> : null}
        <Button
          text="Criar Post"
          onClick={handleBtn}
          customClass={styles.createPost}
        >
          <AiOutlinePlusCircle />
        </Button>
        <div className={styles.inputOrder}>
          <label htmlFor="orderBy">MAIS RECENTES</label>
          <input
            type="checkbox"
            checked={orderBy === 'true' ? true : false}
            onChange={handleOrderBy}
            name="orderBy"
            id="orderBy"
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={user} alt="Exemplo usuário" />
        <div>
          <Button
            text="Sair"
            onClick={handleLogout}
            customClass={styles.btnLogout}
          >
            <IoMdExit />
          </Button>
        </div>
      </div>
    </header>
  );
}
