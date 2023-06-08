import React, { useState, useContext } from 'react';
import { requestPost } from '../services/request';
import { useHistory, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { isLogged } = useContext(MyContext);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const { token, userId } = JSON.parse(localStorage.getItem('user'));

      const body = {
        title,
        content,
        userId,
      };

      const headers = {
        headers: {
          Authorization: token,
        },
      };

      const { id } = await requestPost('/posts', body, headers);
      history.push(`/posts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLogged) return <Redirect to="/login" />

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar nova postagem</h2>
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
      <button type="submit">Criar</button>
    </form>
  );
};

export default CreatePostForm;
