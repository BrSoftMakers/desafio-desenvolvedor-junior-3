import HttpService from './HttpService';
import { Body } from './interface/bodyInterface';
import { PostResponseType } from './types/postResponse.type';

export default class PostsService extends HttpService {
  async fetchAllPosts(orderBy = 'true') {
    return await this.get<PostResponseType[] | []>(
      '/posts?' + `asc=${orderBy}`
    );
  }

  async savePost(data: Body) {
    return await this.post('/posts', data);
  }

  async deletePost(id: string) {
    return await this.delete('/posts/' + id);
  }

  async updatePost(data: Body, id: string) {
    console.log('/posts/' + id);
    return await this.put('/posts/' + id, data);
  }
}
