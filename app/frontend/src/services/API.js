import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
}

export const reqLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export const reqPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export const editPost = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
}

export default api;