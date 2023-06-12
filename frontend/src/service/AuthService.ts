import { LoginResponse } from './types/loginResponse.type';
import { UserInfo } from './types/userInfo.type';

export default class AuthService {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token') ?? null;
  }
  setUserLocalStorage(response: LoginResponse): void {
    localStorage.setItem('token', response?.token);
    localStorage.setItem('user', JSON.stringify(response?.user));
  }

  logout(): void {
    localStorage.clear();
  }

  getUserInfo(): UserInfo | undefined {
    try {
      const user = localStorage.getItem('user');
      if (user) {
        return JSON.parse(user);
      }
    } catch (error) {
      console.error('Erro ao analisar o JSON:', error);
    }
    return undefined;
  }
}
