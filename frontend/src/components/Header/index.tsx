import { Link, useNavigate } from 'react-router-dom';
import user from '../../assets/images/notfounduser.jpg';

import styles from './styles.module.scss';
import Button from '../Button';
import AuthService from '../../service/AuthService';
import { useCallback, useEffect, useMemo } from 'react';
import TostifyService from '../../service/TostifyService';
import PostsService from '../../service/PostsService';

export default function Header() {
  const authService = useMemo(() => new AuthService(), []);
  const postService = useMemo(() => new PostsService(), []);
  const notification = useMemo(() => new TostifyService(), []);
  const navigate = useNavigate();

  const handleBtn = () => {
    console.log('oi');
  };

  const handleLogout = () => {
    authService.logout();
    notification.sucess('Usuário deslogado.');
    navigate('/login');
  };

  const fetchPosts = useCallback(async () => {
    return postService.fetchAllPosts();
  }, [postService]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Meus Posts</Link>
        <Link to="/">Todos os Posts</Link>
      </nav>
      <Button text="Criar Postagem" onClick={handleBtn} />
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
