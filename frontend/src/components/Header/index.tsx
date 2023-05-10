import { Link } from 'react-router-dom';
import user from '../../assets/images/notfounduser.jpg';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import Button from '../Button';
import AuthService from '../../service/AuthService';
import TostifyService from '../../service/TostifyService';
import React, { EventHandler, useContext, useState } from 'react';
import AppContext from '../../context/AppContext';

export default function Header() {
  const authService = new AuthService();
  const notification = new TostifyService();
  const navigate = useNavigate();

  const { orderBy, setOrderBy } = useContext(AppContext);

  const handleBtn = () => {
    console.log('oi');
  };

  const handleOrderBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderBy?.(event.target.checked ? 'true' : 'false');
  };

  const handleLogout = () => {
    authService.logout();
    notification.sucess('Usuário deslogado.');
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Meus Posts</Link>
        <Link to="/">Todos os Posts</Link>
      </nav>
      <Button text="Criar Postagem" onClick={handleBtn} />
      <div className={styles.inputOrder}>
        <label>MAIS RECENTES</label>
        <input
          type="checkbox"
          checked={orderBy === 'true' ? true : false}
          onChange={handleOrderBy}
        />
      </div>
      <div className={styles.rightContainer}>
        <img src={user} alt="Exemplo usuário" />
        <div>
          <Button
            text="Sair"
            onClick={handleLogout}
            customClass={styles.btnLogout}
          />
        </div>
      </div>
    </header>
  );
}
