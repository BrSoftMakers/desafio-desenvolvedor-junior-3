import { useLocation, useHistory } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import adjustTime from '../../utils/adjustTime';

/* eslint-disable camelcase */
interface User {
  id_user: string;
  username: string;
  fullName: string;
  age: number;
  createdAt: string;
}

interface Post {
  id_post: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  dataUser: User;
}

interface LocationProps {
  post: Post;
}

export const PostContainer = (): JSX.Element => {
  const location = useLocation<LocationProps>();
  const { post } = location.state;
  const history = useHistory();

  return (
    <Layout>
      <div className="mt-5 font-title text-4xl mb-5">{post.title}</div>
      <hr />

      <div className="mt-5 mb-10">{post.text}</div>

      <hr />
      <div className="mt-3">Autor(a): {post.dataUser.fullName}</div>
      <div>Criado em: {adjustTime(post.createdAt)}</div>

      <div>
        <button
          className="mt-12 bg-pink-400 p-3 rounded"
          type="button"
          onClick={() => history.push('mural')}
        >
          Voltar
        </button>
      </div>
    </Layout>
  );
};
