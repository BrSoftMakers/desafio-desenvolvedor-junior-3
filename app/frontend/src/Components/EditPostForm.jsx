import React, { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { requestGet, requestPut } from '../services/request';
import MyContext from '../context/MyContext';

const EditPostForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { isLogged } = useContext(MyContext);

  const { token } = JSON.parse(localStorage.getItem('user'));

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      try {
        const post = await requestGet(`/posts/${id}`, headers);
        const { title, content } = post;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.error(error);
      }
    };

    getPost();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      title,
      content,
    };

    try {
      await requestPut(`/posts/${id}`, body, headers);
      history.push(`/posts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLogged) return <Redirect to="/login" />

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar postagem</h2>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditPostForm;
