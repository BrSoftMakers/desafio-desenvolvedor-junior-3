import HttpService from './HttpService';
import { PostResponseType } from './types/postResponse.type';

interface Body {
  [key: string]: string;
}

export default class PostsService extends HttpService {
  async fetchAllPosts() {
    return await this.get('/posts');
  }
}
