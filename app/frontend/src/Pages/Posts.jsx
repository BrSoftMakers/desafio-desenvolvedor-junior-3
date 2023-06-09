import React, { useEffect, useState, useContext } from 'react';
import { requestGet } from '../services/request';
import { Link, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { convertDate } from '../utils/convertData';
import NavBar from '../Components/NavBar';
import '../styles/posts.css'

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
      <main className="posts-container">
        <h1 className="post-title">Todas as postagens:</h1>
        <button
          onClick={toggleOrder}
          className="post-toggle"
        >
          {order}
        </button>
        <div className="posts-grid">
          {posts.map(({ id, title, content, published, updated, user }) => (
            <Link to={`/posts/${id}`} key={id} className="post-card-link">
              <div className="post-card">
                <h3 className="post-card-title">{`Título: ${title}`}</h3>
                <p className="post-card-content">{`Conteúdo: ${content}`}</p>
                <p className="post-card-published">{`Publicado em: ${convertDate(published)}`}</p>
                {updated !== null && (
                  <p className="post-card-updated">{`Editado em: ${convertDate(updated)}`}</p>
                )}
                <p className="post-card-user">{`Publicado por: ${user.name}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Posts;