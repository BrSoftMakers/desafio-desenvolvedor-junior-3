import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../apiClient';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('oi1');
      try {
        const data = await getAllPosts();
        console.log(data);
        setPosts(data);
        console.log('oi4');
        setIsLoading(false);
      } catch (error) {
        console.log('oidd');
        console.log('Ocorreu um erro ao obter os posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={ post.id }>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Blog;
