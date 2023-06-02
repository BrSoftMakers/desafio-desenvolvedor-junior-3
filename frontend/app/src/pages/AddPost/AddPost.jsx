import NavBarHome from "../../components/navBar home/NavBarHome";
import blogFetch from "../../axios/config";
import { useState } from "react";
import "./AddPost.css";

const AddPost = ({ id, validateToken }) => {

    
  if (!id) {
    window.location.assign("/");
  } else {
    validateToken();
  }

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      await blogFetch
        .post("/posts/", {
          title,
          body,
        })
        .then(() => {
          alert("postagem feita com sucesso!");
          window.location.assign("/home");
        });
    } catch (err) {
      console.log(err);
    }

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <>
      <NavBarHome />
      <main className="addPost">
        <h1>Add post</h1>

        <form action="">
          <input
            type="text"
            placeholder="title"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            placeholder="Write here..."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="buttonBox">
            <button type="submit" onClick={(e) => handlePost(e)}>
              Add
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddPost;
