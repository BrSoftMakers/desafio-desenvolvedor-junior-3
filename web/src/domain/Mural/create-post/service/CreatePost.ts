import http from '../../../../config/http';

interface Post {
  title: string;
  text: string;
  user: string;
}

export default async function CreatePostAPI(post: Post): Promise<any> {
  const response = await http.post('/posts/create', post);

  return response;
}
