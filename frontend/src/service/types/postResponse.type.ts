export type PostResponseType = {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  User: {
    name: string;
    id: string;
  };
};
