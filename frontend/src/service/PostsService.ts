import HttpService from './HttpService';
import { PostResponseType } from './types/postResponse.type';

export default class PostsService extends HttpService {
  async fetchAllPosts(orderBy = 'true') {
    return await this.get<PostResponseType[] | []>(
      '/posts?' + `asc=${orderBy}`
    );
  }

  async deletePost(id: string) {
    return await this.delete('/posts/' + id);
  }
}
