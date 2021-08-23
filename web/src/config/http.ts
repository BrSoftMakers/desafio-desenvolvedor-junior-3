import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3333',
});

const token = window.localStorage.getItem('token');

if (token) http.defaults.headers.authorization = `Bearer ${token}`;

export default http;
