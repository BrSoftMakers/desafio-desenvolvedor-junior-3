export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const recoverUser = () => {
  const user = localStorage.getItem('user');
  if (!user) return null;
  const parseUser = JSON.parse(user);
  return parseUser;
};
