import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { requestDeletePost, requestPostById } from './helpers/requestFunctions';
import { recoverUser } from './helpers/storageFunctions';

function SinglePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState('');
  const [token, setToken] = useState('');
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const user = recoverUser();
    if (!user) return navigate('/login');
    requestPostById(user.token, id)
      .then(({ data }) => {
        setPost(data);
        setToken(user.token);
      })
      .catch((error) => {
        alert(error.response.data.message);
        navigate('/posts');
      });
  }, [navigate, id]);

  const deletePost = () =>
    requestDeletePost(token, id)
      .then(({ data }) => {
        alert(data.message);
        return navigate('/posts');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });

  return (
    <div className="mt-5">
      {post && (
        <Card>
          <Card.Header>
            <h2 className="text-center">{post.title}</h2>
          </Card.Header>
          <Card.Body>
            <h4 className="text-justify">{post.content}</h4>
            <br />
            <p>
              {`Data de publicação: ${new Date(
                post.published
              ).toLocaleDateString('pt-BR')}`}
            </p>
            <p>
              {`Última atualização:: ${new Date(
                post.updated
              ).toLocaleDateString('pt-BR')}`}
            </p>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-evenly">
            <button className="btn btn-primary col-3 p-2" type="button">
              Atualizar postagem
            </button>

            <button
              className="btn btn-danger col-3 p-2"
              type="button"
              onClick={deletePost}
            >
              Apagar postagem
            </button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default SinglePost;
