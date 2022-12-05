import axios from "axios";

const api = axios.create({
  baseURL: "https://api-blog.herokuapp.com/",
});

export default api;