import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { requestGet } from '../services/request';
import MyContext from '../context/MyContext';

const PostsDetails = () => {
  const { isLogged } = useContext(MyContext);
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const getPostById = async () => {
      try {
        const silglePost = await requestGet(`/posts/${id}`);
        setPost(silglePost);
      } catch (error) {
        console.error(error);
      }
    };
    getPostById();
  }, [id]);

  if (!isLogged) return <Redirect to="/login" />
  if (!post) return <div>Carregando detalhes da postagem...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Publicado em: {post.published}</p>
      <p>Editado em: {post.updated}</p>
      <p>Publicado por: {post.user.name}</p>
      <button
        type="button"
        onClick={ () => history.push(`/editpost/${id}`) }
      >
        Editar Postagem
      </button>
      <button
        type="button"
        onClick={ () => console.log('ok') }
      >
        Deletar Postagem
      </button>
    </div>
  );
};

export default PostsDetails;