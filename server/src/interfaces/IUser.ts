export default interface IUser {
  id?: string,
  username: string;
  password?: string;
  name: string | null;
  role: string;
}