import IUser from "./IUser";

export default interface IPost {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  thumbnail: string;
  authorId?: string;
  createdAt: string;
  updatedAt?: string;
  author: IUser;
}
