import "./styles.css";
import Close from "../../assets/close.svg";
import { useEffect, useState } from "react";
import useGlobalContext from "../../hooks/useGlobalContext";
import api from "../../services/api";

function EditPostModal({ openEdit, handleClose }) {
  const { currentPost, setCurrentPost, post, token } = useGlobalContext();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function hendleSubmit(e) {
    e.preventDefault();
    try {
      if (!titulo || !descricao) {
        return;
      }
      const response = await api.put(
        `/posts/${currentPost.id}`,
        {
          titulo: titulo,
          descricao: descricao,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status > 204) {
        return;
      }

      const localPosts = [...post];

      const postEditIndex = localPosts.findIndex(
        (post) => post.id === currentPost.id
      );

      localPosts[postEditIndex].titulo = titulo;
      localPosts[postEditIndex].descricao = descricao;

      setCurrentPost([...localPosts]);
      handleClose();
      window.alert("Poste atualizado com sucesso!.");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentPost) {
      const { titulo, descricao } = currentPost;
      setTitulo(titulo);
      setDescricao(descricao);
    }
  }, [currentPost]);
  return (
    <>
      {openEdit ? (
        <div className="backdrop">
          <div className="modal__edit">
            <img
              src={Close}
              alt="close"
              className="close__btn"
              onClick={handleClose}
            />
            <h1>Editar poste</h1>
            <div className="container__form">
              <form onSubmit={hendleSubmit}>
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
                <div className="container__btn__edit">
                  <button className="btn__green">Salvar</button>
                  <button className="tbn__red" onClick={handleClose}>
                    Cancelar
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

export default EditPostModal;
