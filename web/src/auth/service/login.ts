import http from '../../config/http';

interface Credentials {
  username: string;
  password: string;
}

export async function Login(credentials: Credentials): Promise<any> {
  const response = await http.post('/auth/login', credentials);

  return response.data.acess_token;
}

export function storeToken(token: string): void {
  window.localStorage.setItem('token', token);
}

export function getToken(): void {
  window.localStorage.getItem('token');
}
