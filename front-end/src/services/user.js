import _http from './axiosInstancejs'

export const getUsers = () => {
  return _http.get('/users')
}

export const getUserById = (id) => {
  return _http.get(`/users/${id}`)
}
