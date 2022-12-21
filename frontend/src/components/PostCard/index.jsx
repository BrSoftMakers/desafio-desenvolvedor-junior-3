import { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import "./styles.css";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import ConfirmModal from "../ConfirmModal";
import EditPostModal from "../EditPostModal";
import { useState } from "react";
import api from "../../services/api";
import useGlobalContext from "../../hooks/useGlobalContext";
import { formataData } from "../../utils/dates";
import { formatText } from "../../utils/formatText";

function PostCard() {
  const { token, post, setPost, user, setCurrentPost, currentPost } =
    useGlobalContext();
  const [openDelete, setOpenDelete] = useState("");
  const [openEdit, setOpenEdit] = useState("");
  const navigate = Navigate;

  function handleCloseDelete() {
    setOpenDelete(false);
  }

  async function handleConfirmDelete() {
    try {
      const response = await api.delete(`/posts/${currentPost.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status > 204) {
        return;
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenDelete(false);
    }
  }

  function handleDeletePost(post) {
    setCurrentPost(post);
    setOpenDelete(true);
  }

  function handleEditPost(post) {
    setCurrentPost(post);
    setOpenEdit(true);
  }

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await api.get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status > 204) {
          return;
        }

        setPost([...response.data]);
      } catch (error) {
        window.alert(error.message);
      }
    }
    loadPost();
  }, []);
  return (
    <>
      {post.map((posts) => (
        <div className="card" key={posts.id} >
         
          {user.id === posts.autor ? (
            <div className="btn">
              <button className="btn__delete">
                <img
                  src={Delete}
                  alt="Icone Delete"
                  onClick={() => handleDeletePost(posts)}
                />
              </button>
              <button className="btn__edit">
                <img
                  src={Edit}
                  alt="Icone Editar"
                  onClick={() => handleEditPost(posts)}
                />
              </button>
            </div>
          ) : null}
          <div className="header__card">
            <h1>{posts.titulo}</h1>
            <span>{formataData(posts.publicacao)}</span>
          </div>
          <div className="main__card">
            <p>{formatText(posts.descricao, 30)}</p>
          </div>
        </div>
      ))}

      <ConfirmModal
        titulo="Confirma a exclusão?"
        btnConfirm="Excluir"
        btnCancel="Cancelar"
        openDelete={openDelete}
        handleClose={handleCloseDelete}
        handleConfirm={handleConfirmDelete}
      />
      <EditPostModal
        openEdit={openEdit}
        handleClose={() => setOpenEdit(false)}
      />
    </>
  );
}

export default PostCard;
