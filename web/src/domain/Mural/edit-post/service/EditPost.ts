import http from '../../../../config/http';

interface Post {
  title: string;
  text: string;
  user: string;
}

export async function PostAPI(id: string): Promise<any> {
  const response = await http.get(`/posts/${id}`);
  return response;
}

export default async function EditPostAPI(
  id: string,
  post: Post,
): Promise<any> {
  const response = await http.put(`posts/${id}`, post);

  return response;
}
