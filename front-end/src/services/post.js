import _http from './axiosInstance.js'

export const getPosts = () => {
  return _http.get('/posts')
}

export const getPostById = (id) => {
  return _http.get(`/posts/${id}`)
}

export const getUserByToken = () => {
  return _http.post('/users/token')
}

export const getPostsByUserId = (id) => {
  return _http.get(`/posts/user/${id}`)
}

export const createPost = async ({ title, content, demo }) => {
  const payload = await _http.post('/posts', {
    title,
    content,
    demo
  })
  return payload.data
}

export const updatePost = async ({ id, title, content, demo }) => {
  const payload = await _http.put(`/posts/${id}`, {
    title,
    content,
    demo
  })
  return payload
}

export const deletePost = async (id) => {
  const payload = await _http.delete(`/posts/${id}`)
  return payload.data
}
