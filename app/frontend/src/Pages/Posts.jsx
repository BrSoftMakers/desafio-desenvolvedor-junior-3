import React, { useEffect, useState, useContext } from 'react';
import { requestGet } from '../services/request';
import { Link, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { convertDate } from '../utils/convertData';
import NavBar from '../Components/NavBar';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isDescending, setIsDescending] = useState(true);

  const { isLogged } = useContext(MyContext);
  
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
        const sortedPosts = allposts.sort((a, b) => {
          if (isDescending) {
            return new Date(b.published) - new Date(a.published);
          } else {
            return new Date(a.published) - new Date(b.published);
          }
        });
        setPosts(sortedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    getAllPosts();
  }, [isDescending]);

  const toggleOrder = () => {
    setIsDescending(!isDescending);
  };

  if (!isLogged) return <Redirect to="/login" />
  if (!posts) return <div>Carregando detalhes da postagem...</div>;
  const order = isDescending ? 'Mais Antigas' : 'Mais Recentes'

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <h1>Todas as postagens:</h1>
        <button onClick={toggleOrder}>{order} </button>
        <ul>
          {posts.map(({ id, title, content, published, updated, user }) => (
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
                  {`Publicado por: ${user.name}`}
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