/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NavBarHome from "../../components/navBar home/NavBarHome";
import blogFetch from "../../axios/config";
import './ViewPost.css'

const ViewPost = ({ id, validateToken }) => {
  if (!id) {
    window.location.assign("/");
  } else {
    validateToken();
  }

  const [post, setPost] = useState([]);

  useEffect(() => {
    const postId = localStorage.getItem("@viewPost:item");

    blogFetch.get(`/posts/${postId}`).then((response) => {
      setPost([response.data]);
    });
  });


  return (
    <>
      <NavBarHome />
      <section id="viewPost" >
        {post.map((post, key) => {
          return (
            <div className="viewPost" key={post.id} id={key}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </section >
    </>
  );
};

export default ViewPost;
