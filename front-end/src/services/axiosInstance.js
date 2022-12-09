import axios from 'axios'

const token = localStorage.getItem('token')

console.log(process.env.REACT_APP_API_BASE_URL)
console.log(token)

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

export default axiosInstance
