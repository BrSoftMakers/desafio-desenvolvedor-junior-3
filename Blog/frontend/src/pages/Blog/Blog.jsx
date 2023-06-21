import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../apiClient';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os posts:', error);
    }
  };

  return (
    <div>
      {posts.length === 0 ? (
        <p>Não há postagens disponíveis.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Blog;