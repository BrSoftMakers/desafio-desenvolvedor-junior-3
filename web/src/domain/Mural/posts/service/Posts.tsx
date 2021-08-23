/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import http from '../../../../config/http';

interface User {
  id_user: string;
  username: string;
  fullName: string;
  age: number;
  createdAt: string;
}

interface Post {
  id_post: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  dataUser: User;
}

export default async function PostsReverse(): Promise<any> {
  const response = await http.get('/posts/list-reverse');

  return response.data;
}
