import "./styles.css";

import logoHeader from "../../assets/logoHeader.svg";
function PostDetail() {
  return (
    <div className="container">
      <header>
        <div className="container__header">
          <img src={logoHeader} alt="Profile"></img>
        </div>
      </header>
      <div className="content">
        <div className="person__info">
          <div className="content__info">
            <div className="header__infor">
              <h1>Titulo</h1>
              <button className="logout__btn">Volta</button>
            </div>
          </div>
        </div>
        <div className="container__post">
          <div className="posts">
            <p>Descrição</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
