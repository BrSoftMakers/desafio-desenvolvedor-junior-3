import { useCallback, useContext, useMemo, useState } from 'react';
import { PostResponseType } from '../../../service/types/postResponse.type';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import styles from './styles.module.scss';
import AppContext from '../../../context/AppContext';
import PostsService from '../../../service/PostsService';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../../service/AuthService';
import TostifyService from '../../../service/TostifyService';

import moment from 'moment';

export default function PostCard({
  id,
  userId,
  createdAt,
  updatedAt,
  text,
  title,
  User,
}: PostResponseType) {
  const { userInfo, setRefetch } = useContext(AppContext);

  const navigate = useNavigate();

  const postsService = useMemo(() => new PostsService(), []);
  const authService = useMemo(() => new AuthService(), []);
  const notification = useMemo(() => new TostifyService(), []);

  const [maxTextSize] = useState<550>(550);

  const handeClick = () => {
    console.log('oi');
  };

  const handleDelete = useCallback(async () => {
    try {
      await postsService.deletePost(id);
      notification.sucess('Post deletado.');
      setRefetch((oldState) => oldState + 1);
    } catch (error: any) {
      const { response } = error;
      if (response?.status === 401) {
        authService.logout();
        notification.sucess('Tempo de sessão expirado.');
        navigate('/login');
      }
    }
  }, [authService, id, navigate, notification, postsService, setRefetch]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.infoContainer}>
          <strong>{title}</strong>
          <span>Escrito por: {User?.name}</span>
        </div>

        <div className={styles.textContainer}>
          <div>
            {text?.length > maxTextSize ? (
              <span>
                {text.substring(0, maxTextSize)}...{' '}
                <Link to={'/post/' + id} className={styles.readMore}>
                  clique para ler mais
                </Link>
              </span>
            ) : (
              <span>{text}</span>
            )}
          </div>
        </div>

        <div className={styles.datesContainer}>
          <span>
            Data da postagem: {moment(createdAt).format('DD/MM/yyyy')}
          </span>
          {updatedAt !== createdAt && (
            <span>
              Atualizado em: {moment(updatedAt).format('DD/MM/yyyy - hh:mm')}h
            </span>
          )}
        </div>
      </div>
      {userInfo?.id === userId && (
        <div className={styles.btnContainer}>
          <AiFillDelete
            size="24px"
            color="red"
            className={styles.actionBtn}
            onClick={handleDelete}
          />
          <AiFillEdit size="24px" color="green" className={styles.actionBtn} />
        </div>
      )}
    </div>
  );
}
