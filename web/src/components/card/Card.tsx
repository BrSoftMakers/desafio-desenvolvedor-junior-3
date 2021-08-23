/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import { MdModeEdit, MdDelete, MdRemoveRedEye } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import deletePost from './service/deletePost';

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

interface Props {
  post: Post;
}

export const Card = (props: Props): JSX.Element => {
  const { userId } = useAuth();
  const { post } = props;
  const history = useHistory();

  return (
    <div className="border-2 p-6 m-5 rounded bg-gray-100">
      <div className="flex justify-between">
        <div className="font-title font-semibold text-xl mb-1">
          {post.title}
        </div>
        <div>
          <button
            className="bg-blue-400 p-2 rounded text-lg mx-1 mb-1"
            type="button"
            onClick={() =>
              history.push({
                pathname: 'post',
                state: {
                  post,
                },
              })
            }
          >
            <MdRemoveRedEye />
          </button>
          {props.post.dataUser.id_user === userId ? (
            <>
              <button
                className="bg-yellow-300 p-2 rounded text-lg mx-1 mb-1"
                type="button"
                onClick={() =>
                  history.push({
                    pathname: 'edit-post',
                    state: {
                      post,
                    },
                  })
                }
              >
                <MdModeEdit />
              </button>
              <button
                className="bg-red-400 p-2 rounded text-lg mx-1 mb-1"
                type="button"
                onClick={async () => {
                  await deletePost(post.id_post);
                  Swal.fire('Postagem deletada com sucesso', '', 'success');
                  window.location.reload();
                }}
              >
                <MdDelete />
              </button>
            </>
          ) : null}
        </div>
      </div>

      <hr />
      <div className="mt-3 text-gray-800">{post.text}</div>
    </div>
  );
};
