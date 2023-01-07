import "./styles.css";
import Header from "../../components/Header";
import PersonInfo from "../../components/PersonInfo";
import PostCard from "../../components/PostCard";

function Main() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <PersonInfo />
        <div className="container__post">
          <div className="posts">
          <PostCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
