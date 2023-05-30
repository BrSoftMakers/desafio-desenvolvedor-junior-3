import NavBarHome from "../../components/navBar home/NavBarHome";
import blogFetch from "../../axios/config";
import { useState, useEffect } from "react";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    blogFetch
      .get("/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.lo(err);
      });
  }, []);
  return (
    <>
      <NavBarHome />

      <main>
        {post.map((post, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <span>{key}</span>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
