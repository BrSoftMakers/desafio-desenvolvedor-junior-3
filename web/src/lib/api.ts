import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3030",
});

export const setToken = (token: string) => {
  api.defaults.headers.common.authorization = token;
};

export default api;
