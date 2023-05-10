import { LoginResponse } from './types/loginResponse.type';

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
}
