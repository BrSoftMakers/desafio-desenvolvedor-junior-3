import _http from './axiosInstance.js'

export const register = async (data) => {
  const { email, password, name } = data
  const response = await _http.post('/register', { email, password, name })
  return response.data
}
