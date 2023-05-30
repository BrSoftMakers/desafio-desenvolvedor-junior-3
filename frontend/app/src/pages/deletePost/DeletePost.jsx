import NavBarHome from "../../components/navBar home/NavBarHome";
import blogFetch from "../../axios/config";
import { useState } from "react";

const DeletePost = () => {
  
  
    const [title, setTitle] = useState("");

    async function handleDelete(e){
        e.preventDefault()
            await blogFetch.delete(`/posts/${title}`).then(() => {
                alert('Exclusão feita com sucesso!')
                window.location.assign("/home");
            }).catch((err) => {
                console.log(err)
            })
    }
  return (
    <>
      <NavBarHome />
      <main className="addPost">
        <form action="">
          <input
            type="text"
            placeholder="title"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="buttonBox">
            <button type="submit" onClick={(e) => handleDelete(e)}>
              Delete
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default DeletePost;
