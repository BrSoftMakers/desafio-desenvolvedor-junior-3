import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const { REACT_APP_API_BASE_URL } = process.env;

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});

export default axiosInstance;
