import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import CreatePost from '../../Components/createPost';
import api, { setToken } from '../../services/API';
import './blog.css';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [logged, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [receivePosts, setReceivePosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const email = localStorage.getItem('email');
    setEmail(email);
    if (token) setLogin(true);
    const Post = async () => {
      try {
        const token = localStorage.getItem('token') || '';
        if (token !== '') {
          setToken(token);
        }
        const { data } = await api.get('/posts');
        setReceivePosts(data)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    Post();
  }, []);

  return(
    <div className='blog'>
      <div className='header'>
        {
          (logged)
          ? (
            <>
              <p>Voce esta logado como: {email}</p>
              <Link to="/myPosts">
                <button
                  type='button'
                  className='btnh'
                >
                  MyPosts
                </button>
              </Link>
            </>
          ) : null
        }
      </div>
      <h1>Postagens</h1>
      <CreatePost />
      <div className='contPosts'>
        {
          loading === false
          && receivePosts.posts.map((item, index) => {
            const d = new Date(item.published);
            return (
              <div key={ index } className='posts'>
                <div className='conteudo'>
                  <h3>{`Title: ${item.title}`}</h3>
                  <p className='content'>{`Content: ${item.content}`}</p>
                  <p>{`User: ${item.user.email}`}</p>
                  <p>{`Publicacao: ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}