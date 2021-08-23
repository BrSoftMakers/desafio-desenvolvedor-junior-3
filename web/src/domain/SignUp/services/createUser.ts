import http from '../../../config/http';

interface User {
  username: string;
  password: string;
  fullName: string;
  age: number;
}

export default async function CreateUser(user: User): Promise<any> {
  const response = await http.post('/users/create', user);

  return response;
}
