import React, { useEffect, useState, useContext } from 'react';
import { requestGet } from '../services/request';
import { Link, Redirect, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Posts() {
  const { isLogged, deletePost } = useContext(MyContext);
  const [posts, setPosts] = useState([]);

  const history = useHistory()
  
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const headers = {
          headers: {
            Authorization: token,
          },
        };
        const allposts = await requestGet('/posts', headers);
        setPosts(allposts);
      } catch (error) {
        localStorage.clear();
        return <Redirect to="/notfound" />
      }
    };
    getAllPosts();
  }, []);
  
  if (!isLogged) return <Redirect to="/login" />

  return (
    <main>
      <h1>Todas as postagens:</h1>
      <ul className="product-container">
        {posts?.map(({ id, title, content, published, updated, user }) => (
          <Link to={`/posts/${id}`} key={id}>
            <li>
              <h3>
                {`Título: ${title}`}
              </h3>
              <p>
                {`Conteúdo: ${content}`}
              </p>
              <p>
                {`Publicado em: ${published}`}
              </p>
              <p>
                {`Editado em: ${updated}`}
              </p>
              <p>
                {`Publicado pro: ${user.name}`}
              </p>
              <button
                type="button"
                onClick={ () => history.push(`/editpost/${id}`) }
              >
                Editar Postagem
              </button>
              <button
                type="button"
                onClick={ () => deletePost(id) }
              >
                Deletar Postagem
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Posts;