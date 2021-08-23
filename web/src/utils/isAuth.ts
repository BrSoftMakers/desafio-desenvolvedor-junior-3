export const isAuthenticated = (): boolean => {
  if (window.localStorage.getItem('token')) return true;

  return false;
};
