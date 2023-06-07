import React, { useEffect, useState, useContext } from 'react';
import { requestGet } from '../services/request';
import { Link, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Posts() {
  const { isLogged } = useContext(MyContext);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        console.log('cheguei');
        const allposts = await requestGet('/posts');
        setPosts(allposts);
      } catch (error) {
        console.error(error);
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
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Posts;