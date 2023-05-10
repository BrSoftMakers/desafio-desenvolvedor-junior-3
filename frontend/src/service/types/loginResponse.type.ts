export type LoginResponse = {
  token: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
};
