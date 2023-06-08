import React, { useEffect, useState, useContext } from 'react';
import { requestGet } from '../services/request';
import { Link, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { convertDate } from '../utils/convertData';
import NavBar from '../Components/NavBar';

function Posts() {
  const { isLogged } = useContext(MyContext);
  const [posts, setPosts] = useState([]);
  
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
    <>
      <nav>
        <NavBar />
      </nav>
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
                  {`Publicado em: ${convertDate(published)}`}
                </p>
                {
                  updated !== null && (
                <p>
                  {`Editado em: ${convertDate(updated)}`}
                </p>
                  )
                }
                <p>
                  {`Publicado pro: ${user.name}`}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Posts;