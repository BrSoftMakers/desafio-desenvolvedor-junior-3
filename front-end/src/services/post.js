import _http from './axiosInstancejs'

export const getPosts = () => {
  return _http.get('/posts')
}
