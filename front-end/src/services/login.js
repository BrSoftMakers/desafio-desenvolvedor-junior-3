import _http from './axiosInstance.js'

export const login = (data) => {
  const { email, password } = data
  return _http.post('/login', { email, password })
}
