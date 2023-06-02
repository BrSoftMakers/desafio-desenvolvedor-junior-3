import { Link } from "react-router-dom";
import "./NavBarHome.css";
import blogFetch from '../../axios/config'

const NavBarHome = () => {

  const handleLogout = async (e) => {
    e.preventDefault()
    localStorage.clear()
    window.location.assign('/')
  }

  return (
    <nav>
      <a href="/home" id="navBrand">
        <h1>Blog system</h1>
      </a>

      <div className="links">
        <Link to="/addPost">add Post</Link>
        <Link to="/editPost">Edit post</Link>
        <Link to="/deletePost">delete post</Link>
        <button onClick={(e) => handleLogout(e)}>logout</button>
      </div>
    </nav>
  );
};
export default NavBarHome;
