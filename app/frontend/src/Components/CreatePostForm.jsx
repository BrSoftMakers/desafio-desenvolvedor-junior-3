import React, { useState, useContext } from 'react';
import { requestPost } from '../services/request';
import { useHistory, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../styles/createPost.css'

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
    <>
      <h1>Criar nova postagem</h1>
      <div className="create-post-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="create-post-form__label">Título:</label>
        <input
          type="text"
          id="title"
          className="create-post-form__input"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="content" className="create-post-form__label">Conteúdo:</label>
        <textarea
          id="content"
          value={content}
          className="create-post-form__textarea"
          onChange={({ target }) => setContent(target.value)}
        />
        <button type="submit" className="create-post-form__button">Criar</button>
      </form>
      </div>
    </>
  );
};

export default CreatePostForm;
