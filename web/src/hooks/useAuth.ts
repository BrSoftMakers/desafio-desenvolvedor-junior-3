import { useContext } from 'react';
import { AuthContext } from '../auth/context/authContext';

interface User {
  userId: string;
  username: string;
}

export function useAuth(): User {
  const value = useContext(AuthContext);
  const user = value.user as User;

  return { ...user };
}
