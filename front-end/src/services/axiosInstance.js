import axios from 'axios'

const token = localStorage.getItem('token')

console.log('token', token)

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
})

// function interceptador (config) {
//   axios.get('/ping').then((response) => {
//     console.log(response)
//     if (response.status === 200) console.log('token válido')
//   }).catch((error) => {
//     if (error.response.status === 401) {
//       localStorage.removeItem('token')
//       console.log('token inválido')
//     }
//   })
// }

// axiosInstance.interceptors.response.use(interceptador)

export default axiosInstance
