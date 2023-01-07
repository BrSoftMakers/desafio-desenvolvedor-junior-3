import { useState } from "react";
import { useLocalStorage } from "react-use";

function useGlobalContextProvider() {
  const [token, setToken, clearToken] = useLocalStorage("token");
  const [user, setUser, clearUser] = useLocalStorage("user");
  const [post, setPost] = useState([]);
  const [currentPost, setCurrentPost, clearCurrentPost] = useLocalStorage('current_post');

  return {
    token,
    setToken,
    clearToken,
    user,
    setUser,
    clearUser,
    post, 
    setPost,
    currentPost, 
    setCurrentPost,
    clearCurrentPost
  };
}

export default useGlobalContextProvider;
