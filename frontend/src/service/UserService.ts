import HttpService from './HttpService';
import { Body } from './interface/bodyInterface';
import { LoginResponse } from './types/loginResponse.type';

export default class UserService extends HttpService {
  async register(body: Body): Promise<void> {
    return await this.post('/register', body);
  }

  async login(body: Body): Promise<LoginResponse> {
    return await this.post('/login', body);
  }
}
