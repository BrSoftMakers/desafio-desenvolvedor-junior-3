import "./styles.css";
import Close from "../../assets/close.svg";
import { useState } from "react";
import api from "../../services/api";
import useGlobalContext from "../../hooks/useGlobalContext";

function CreatePostModal({ openAdd, handleClose }) {
  const { token, user, post, setPost } = useGlobalContext();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [autor, setAutor] = useState("");
  const [publicacao, setPublicacao] = useState("");

  function handleClear() {
    setTitulo("");
    setDescricao("");
    setAutor("");
    setPublicacao("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!titulo) {
      return window.alert("Você precisa informar o titulo");
    }
    if (!descricao) {
      return window.alert("Você precisa informar a descricao");
    }
    try {
      const response = await api.post(
        "/posts",
        {
          titulo: titulo,
          descricao: descricao,
          autor: user.id,
          publicacao: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.statusText !== "Created") {
       return;
      }
      
      window.alert("Poste cadastrado com sucesso!");
      handleClose();
      handleClear();
      setPost([...post, ...response.data]);

      if(response.statusText === "Created") {
       return 
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {openAdd ? (
        <div className="backdrop">
          <div className="modal__create">
            <img
              src={Close}
              alt="close"
              className="close__btn"
              onClick={handleClose}
            />
            <h1>Criar Poste</h1>
            <div className="container__form">
              <form onSubmit={handleSubmit}>
                <input
                  id="titulo"
                  placeholder="Titulo"
                  className="form__titulo"
                  type="text"
                  name="titulo"
                  onChange={(e) => setTitulo(e.target.value)}
                  value={titulo}
                />

                <textarea
                  id="descricao"
                  placeholder="descrição"
                  className="form__descricao"
                  type="text"
                  name="descricao"
                  onChange={(e) => setDescricao(e.target.value)}
                  value={descricao}
                />
                <div className="container__btn__create">
                  <button className="btn__green" type="submit">
                    Adicionar
                  </button>
                  <button className="tbn__red" onClick={handleClear}>
                    Limpar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CreatePostModal;
