import axios from 'axios';

export const requestLogin = ({ email, password }) =>
  axios.post('http://localhost:3001/login', { email, password });

export const requestRegister = (user) =>
  axios.post('http://localhost:3001/register', user);

export const requestAllPosts = (token) =>
  axios.get('http://localhost:3001/posts', {
    headers: { Authorization: token },
  });

