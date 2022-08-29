import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api, { setToken, editPost } from '../../services/API';
import './myposts.css';

export default function MyPosts() {
  const [email, setEmail] = useState('');
  const [logged, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [receivePosts, setReceivePosts] = useState([]);
  const [requisition, setRequisition] = useState({
    id: 0,
    title: '',
    content: '',
  });

  const { title, content, id } = requisition;

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    setEmail(email);
    if (token) setLogin(true);
    const Post = async () => {
      try {
        const token = localStorage.getItem('token') || '';
        if (token !== '') setToken(token);
        const { data } = await api.get('/posts');
        setReceivePosts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    Post();
  }, []);

  const Delete = async (id) => {
    const token = localStorage.getItem('token') || '';
    if (token !== '') setToken(token);
    try {
      await api.delete(`/posts/${id}`);
    } catch (err) {
      console.log(err);
    }
    window.location.reload(false);
  }

  const handleChange = ({target}) => {
    const { name, value } = target;
    setRequisition({...requisition, [name]: value });
  }

  const Edit = async (id) => {
    const token = localStorage.getItem('token') || '';
    if (token !== '') setToken(token);
    try {
      editPost(`/posts/${id}`, { title, content });
    } catch (err) {
      console.log(err);
    }
    window.location.reload(true);
  }

  return(
    <div className='blog'>
      <div className='header'>
        {
          (logged)
          ? (
            <>
              <p>Voce esta logado como: {email}</p>
              <Link to="/posts">
                <button
                    type='button'
                    className='btnh'
                >
                    All posts
                </button>
              </Link>
            </>
          ) : null
        }
      </div>
      <h1>Postagens</h1>
      <div className='forms'>
        <div className='align'>
          <p>ID: </p>
          <input
            className="inputNumber"
            type="number"
            name="id"
            id="id"
            value={ id }
            onChange={ handleChange }
          />
        </div>
        <input
          className='inputTitle'
          type="text"
          name="title"
          id="title"
          value={ title }
          placeholder="Titulo do Post"
          onChange={ handleChange }
        />
        <input
          className='inputContent'
          type="text"
          name="content"
          id="content"
          value={ content }
          placeholder="Conteudo do Post"
          onChange={ handleChange }
        />
        <input
          type="submit"
          onClick={() => Edit(id)}
          className='btnP'
          value="Edit"
        />
      </div>
      <div className='contPosts'>
        {
          loading === false
          && receivePosts.posts.map((item, index) => {
            return item.user.email.includes(email) && (
            <div key={ index } className='posts'>
              <button
                className='btnX'
                onClick={() => Delete(item.id)}
              >
                X
              </button>
              <div className='conteudo'>
                <h3>{`Title: ${item.title}, ID: ${item.id}`}</h3>
                <p className='content'>{`Content: ${item.content}`}</p>
                <p>{`User: ${item.user.email}`}</p>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  )
}