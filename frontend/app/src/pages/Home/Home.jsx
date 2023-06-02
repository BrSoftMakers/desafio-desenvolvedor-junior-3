/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NavBarHome from "../../components/navBar home/NavBarHome";
import blogFetch from "../../axios/config";
import { useState, useEffect } from "react";
import "./Home.css"
// import { useNavigate,  } from "react-router-dom";

const Home = ({ id, validateToken }) => {

  if(!id){
    window.location.assign("/");
  } else {
    validateToken();
  }


  const handleViewPost = async (e, id) => {
    e.preventDefault()

    window.location.assign("/viewPost");
    localStorage.setItem('@viewPost:item', JSON.parse(id))
  }


  const [post, setPost] = useState([]);

  useEffect(() => {
    blogFetch
      .get("/posts")
      .then((response) => {
        setPost(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavBarHome />

      <main>
        {post.map((post, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            
            <div className="posts" key={post.id} id={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <span>{key}</span>
              <div>
                <button onClick={(e) => handleViewPost(e, post.id)}>Ver mais</button>  
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
