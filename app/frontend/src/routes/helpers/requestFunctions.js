import axios from 'axios';

export const requestLogin = ({ email, password }) =>
  axios.post('http://localhost:3001/login', { email, password });

export const requestRegister = (user) =>
  axios.post('http://localhost:3001/register', user);

export const requestAllPosts = (token) =>
  axios.get('http://localhost:3001/posts', {
    headers: { Authorization: token },
  });

export const requestPostByUser = ({ token, id }) =>
  axios.post(
    'http://localhost:3001/posts/user',
    { userId: id },
    {
      headers: { Authorization: token },
    }
  );

export const requestPostById = (token, id) =>
  axios.get(`http://localhost:3001/posts/${id}`, {
    headers: { Authorization: token },
  });

export const requestDeletePost = (token, id) =>
  axios.delete(`http://localhost:3001/posts/${id}`, {
    headers: { Authorization: token },
  });

export const requestCreatePost = (token, post) =>
  axios.post('http://localhost:3001/posts/user', post, {
    headers: { Authorization: token },
  });
