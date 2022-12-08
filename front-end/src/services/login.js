import _http from './axiosInstancejs'

export const login = (data) => {
  const { email, password } = data
  return _http.post('/login', { email, password })
}
