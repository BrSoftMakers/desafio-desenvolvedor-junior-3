import React, { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { requestGet, requestPut } from '../services/request';
import MyContext from '../context/MyContext';
import '../styles/editPost.css'

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
    <>
    <h1>Editar postagem</h1>
    <div className="edit-post-form">
      <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="edit-post-form__label">Título:</label>
          <input
            type="text"
            id="title"
            className="edit-post-form__input"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        <label htmlFor="content" className="edit-post-form__label">Conteúdo:</label>
        <textarea
          id="content"
          className="edit-post-form__textarea"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <button type="submit" className="edit-post-form__button">Salvar</button>
      </form>
    </div>
    </>
  );
};

export default EditPostForm;
