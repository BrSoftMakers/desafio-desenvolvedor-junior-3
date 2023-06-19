import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Ajuste a URL de acordo com a sua API
});

export const createUser = (userData) => {
  return api.post('/register', userData)
    .then((response) => response.data)
    // eslint-disable-next-line no-unused-vars
    .catch((_error) => {
      throw new Error('Erro ao criar usuário');
    });
};

export const loginUser = (userData) => {
  return api.post('/login', userData)
    .then((response) => response.data)
    // eslint-disable-next-line no-unused-vars
    .catch((_error) => {
      throw new Error('Erro ao fazer login');
    });
};
export const getAllPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter as postagens');
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post('/posts', postData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar postagem');
  }
};

export const editPost = async (postId, postData) => {
  try {
    const response = await api.put(`/posts/${postId}`, postData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao editar postagem');
  }
};

export const deletePost = async (postId) => {
  try {
    await api.delete(`/posts/${postId}`);
  } catch (error) {
    throw new Error('Erro ao deletar postagem');
  }
};