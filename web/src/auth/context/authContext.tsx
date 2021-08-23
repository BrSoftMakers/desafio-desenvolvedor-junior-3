import React from 'react';
import http from '../../config/http';

export const AuthContext = React.createContext({} as AuthContextData);

interface User {
  userId: string;
  username: string;
}

interface AuthContextData {
  user: User | undefined;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function AuthContextProvider(
  props: AuthContextProviderProps,
): JSX.Element {
  const { children } = props;
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    async function Profile(): Promise<void> {
      const response = await http.get('/auth/profile');

      setUser(response.data);
    }

    Profile();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
