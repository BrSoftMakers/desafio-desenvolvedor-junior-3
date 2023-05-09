import HttpService from './HttpService';

interface Body {
  [key: string]: string;
}

export default class UserService extends HttpService {
  async login(url: string, body: Body): Promise<void> {
    await this.post(url, body);
  }
}
