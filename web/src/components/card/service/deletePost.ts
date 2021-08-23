import http from '../../../config/http';

export default async function deletePost(id: string): Promise<void> {
  await http.delete(`/posts/${id}`);
}
