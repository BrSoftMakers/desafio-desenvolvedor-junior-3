import _http from './axiosInstance.js'

export const getPosts = () => {
  return _http.get('/posts')
}
