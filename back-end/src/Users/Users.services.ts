import UsersModels from "./Users.models";

const getUsers = async () => {
  const users = await UsersModels.getUsers();
  return users;
}

const getUserById = async (id: string) => {
  const user = await UsersModels.getUserById(id);
  return user;
}

export default {
  getUsers,
  getUserById
};
