import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../Components/NavBar';
import { requestGet } from '../services/request';
import { convertDate } from '../utils/convertData';
import { Link, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isDescending, setIsDescending] = useState(true);

  const { isLogged } = useContext(MyContext);

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        const { token, userId } = JSON.parse(localStorage.getItem('user'));
        const headers = {
          headers: {
            Authorization: token,
          },
        };
        const response = await requestGet(`/posts/mypost/${userId}`, headers);
        const sortedPosts = response.sort((a, b) => {
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

    getMyPosts();
  }, [isDescending]);

  const toggleOrder = () => {
    setIsDescending(!isDescending);
  };

  if (!isLogged) return <Redirect to="/login" />;
  if (!posts) return <div>Carregando detalhes da postagem...</div>;

  return (
    <>
      <NavBar />
      <main>
        <h1>Suas postagens:</h1>
        <button onClick={toggleOrder}>Inverter Ordem</button>
        <ul>
          {posts.map(({ id, title, content, published, updated, user }) => (
            <Link to={`/posts/${id}`} key={id}>
              <li key={id}>
                <h3>{`Título: ${title}`}</h3>
                <p>{`Conteúdo: ${content}`}</p>
                <p>{`Publicado em: ${convertDate(published)}`}</p>
                {
                  updated !== null && <p>{`Editado em: ${convertDate(updated)}`}</p>
                }
                <p>{`Publicado por: ${user.name}`}</p>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
};

export default MyPosts;
