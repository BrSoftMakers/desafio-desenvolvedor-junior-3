import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestPost = async (endpoint, body, headers) => {
  const { data } = await api.post(endpoint, body, headers);
  return data;
};

export const requestGet = async (endpoint, body) => {
  const { data } = await api.get(endpoint, body);
  return data;
};

export const requestPut = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export default api;