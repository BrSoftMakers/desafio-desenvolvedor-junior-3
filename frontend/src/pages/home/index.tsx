import { useCallback, useContext, useEffect, useMemo } from 'react';
import withAuthentication from '../../routes/auth';
import AppContext from '../../context/AppContext';
import PostCard from '../components/PostCard';
import PostsService from '../../service/PostsService';
import TostifyService from '../../service/TostifyService';
import AuthService from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { isLoading, setIsLoading, posts, setAllPosts, orderBy, refetch } =
    useContext(AppContext);

  const navigate = useNavigate();

  const postService = useMemo(() => new PostsService(), []);
  const notification = useMemo(() => new TostifyService(), []);
  const authService = useMemo(() => new AuthService(), []);

  const fetchPosts = useCallback(
    async (orderBy: string) => {
      try {
        setIsLoading?.(true);
        const posts = await postService.fetchAllPosts(orderBy);

        setAllPosts?.(posts);

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
    [
      authService,
      navigate,
      notification,
      postService,
      setAllPosts,
      setIsLoading,
    ]
  );

  useEffect(() => {
    fetchPosts(orderBy);
  }, [fetchPosts, orderBy, refetch]);

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
