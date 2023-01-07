import api, { setToken } from "../lib/api";

const getToken = () => {
  const token = localStorage.getItem("SM_TOKEN");
  if (token) setToken(JSON.parse(token));
};
const getUser = async () => {
  getToken();
  try {
    const { data } = await api.get("/validate");
    const user = JSON.stringify(data);
    localStorage.setItem("SM_USER", user);
  } catch (error) {
    window.location.href = "/";
  }
};
const useAuth = async () => {
  await getUser();
};

export default useAuth;
