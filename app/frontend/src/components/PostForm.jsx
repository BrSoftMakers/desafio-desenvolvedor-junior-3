import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  requestCreatePost,
  requestUpdatePost,
} from '../routes/helpers/requestFunctions';
import { recoverUser } from '../routes/helpers/storageFunctions';

function PostForm() {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });
  const [title, setTitle] = useState('');
  const [user, setUser] = useState({});
  const location = useLocation();
  const titleMinLength = 10;
  const contentMinLength = 20;
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const userStorage = recoverUser();
    if (!user) return navigate('/login');
    setUser(userStorage);
    if (location.pathname.includes('create')) {
      setTitle('Nova Postagem');
    }
    if (location.pathname.includes('update')) {
      setTitle('Edite seu Post');
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setPost({ ...post, [name]: value });
  };

  const createPost = async () => {
    const { token, id } = user;
    return requestCreatePost(token, { ...post, userId: id })
      .then(({ data: { id } }) => {
        return navigate(`/my-posts/${id}`);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const updatePost = async () => {
    const { token, id: userId } = user;
    const { title, content } = post;
    let validPost = { ...post };
    if (title.length < titleMinLength) {
      validPost = { content: post.content };
    }
    if (content.length < contentMinLength) {
      validPost = { title: post.title };
    }
    return requestUpdatePost(token, { ...validPost, userId }, id)
      .then(({ data }) => {
        alert(data.message);
        return navigate(`/my-posts/${id}`);
      })
      .catch((error) => {
        alert(error.response.data.message);
        return navigate(`/posts`);
      });
  };

  return (
    <div className="mt-5">
      <h2 className="text-center">{title}</h2>
      <Form className="border border-5d-flex p-5 bg-secondary bg-opacity-10 bg-gradient flex-column align-items-center">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite aqui seu título"
            onChange={handleChange}
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Conteúdo</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleChange}
            name="content"
          />
        </Form.Group>
        <div className="d-grid gap-2 col-4 mx-auto">
          {location.pathname.includes('create') && (
            <button
              className="btn btn-success"
              type="button"
              disabled={
                !(
                  post.title.length > titleMinLength &&
                  post.content.length > contentMinLength
                )
              }
              onClick={createPost}
            >
              Enviar
            </button>
          )}
          {location.pathname.includes('update') && (
            <button
              className="btn btn-success"
              type="button"
              disabled={
                !(
                  post.title.length > titleMinLength ||
                  post.content.length > contentMinLength
                )
              }
              onClick={updatePost}
            >
              Atualizar
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default PostForm;
