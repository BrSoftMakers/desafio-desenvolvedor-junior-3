import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import withAuthentication from '../../routes/auth';
import PostsService from '../../service/PostsService';
import AuthService from '../../service/AuthService';
import TostifyService from '../../service/TostifyService';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { PostResponseType } from '../../service/types/postResponse.type';
import PostCard from '../components/PostCard';

function Home() {
  const { isLoading, setIsLoading, orderBy, refetch } = useContext(AppContext);

  const postService = useMemo(() => new PostsService(), []);
  const authService = useMemo(() => new AuthService(), []);
  const notification = useMemo(() => new TostifyService(), []);

  const [posts, setPosts] = useState<PostResponseType[] | []>([]);

  const navigate = useNavigate();

  const fetchPosts = useCallback(
    async (orderBy: string) => {
      try {
        setIsLoading?.(true);
        const posts = await postService.fetchAllPosts(orderBy);

        setPosts(posts);

        return;
      } catch (error: any) {
        const { response } = error;

        if (response?.status === 401) {
          authService.logout();
          notification.sucess('Tempo de sessão expirado.');
          navigate('/login');
        }

        return;
      } finally {
        setIsLoading?.(false);
      }
    },
    [authService, navigate, notification, postService, setIsLoading, refetch]
  );

  useEffect(() => {
    fetchPosts(orderBy);
  }, [fetchPosts, orderBy]);

  return isLoading ? (
    <span>'Carregando Posts'</span>
  ) : (
    <>
      {posts?.map((post) => {
        return <PostCard {...post} key={post.id} />;
      })}
    </>
  );
}

const AuthenticatedComponent = withAuthentication(Home);

export default AuthenticatedComponent;
