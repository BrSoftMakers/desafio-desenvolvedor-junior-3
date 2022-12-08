import _http from './axiosInstancejs'

export const register = (data) => {
  const { email, password, name } = data
  return _http.post('/register', { email, password, name })
}
