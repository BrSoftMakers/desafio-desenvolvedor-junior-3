/* eslint-disable react/no-danger */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoBack from "../../components/GoBack";
import api from "../../lib/api";
import formattedDate from "../../lib/formattedDate";
import deleteIcon from "../../assets/images/delete-icon.svg";
import editIcon from "../../assets/images/edit-icon.svg";
import * as S from "./style";
import useAuth from "../../hooks/useAuth";
import IPost from "../../interfaces/IPost";
import IUser from "../../interfaces/IUser";
import Nav from "../../components/Nav";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

export default function Post() {
  const [post, setPost] = useState(null as IPost | null);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[3];
  const endpoint = `/posts/${postId}`;
  const user: Partial<IUser> = JSON.parse(
    localStorage.getItem("SM_USER") || ""
  );

  const isOwner = user?.id === post?.authorId;
  const authorized = isOwner || user?.role === "ADMIN";

  useEffect(() => {
    useAuth();
  }, [postId]);

  const getPost = async () => {
    try {
      const { data } = await api.get(endpoint);
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async () => {
    try {
      await api.delete(endpoint);
      navigate("/blog");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!post) {
      getPost();
    }
  }, [postId]);

  if (!post) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <S.PostContainer>
        <S.Controls>
          <GoBack />
          <div className="wrapper">
            {isOwner && (
              <button
                className="edit"
                type="button"
                onClick={() => navigate(`/editor/post/${postId}`)}
              >
                <span className="text">Editar</span>
                <span className="icon">
                  <img src={editIcon} alt="delete icon" />
                </span>
              </button>
            )}
            {authorized && (
              <button className="delete" type="button" onClick={deletePost}>
                <span className="text">Excluir</span>
                <span className="icon">
                  <img src={deleteIcon} alt="delete icon" />
                </span>
              </button>
            )}
          </div>
        </S.Controls>
        <S.PostHeader>
          <h1>{post.title}</h1>
          <p>{post.subtitle || ""}</p>
          <div className="meta">
            <div>
              <span className="label">Escrito por</span>
              <span className="value">
                {post.author.name || post.author.username}
              </span>
            </div>
            <div>
              <span className="label">Publicado em</span>
              <span className="value">{formattedDate(post.createdAt)}</span>
            </div>
          </div>
        </S.PostHeader>
        <S.PostContent>
          <div
            className="inner"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </S.PostContent>
      </S.PostContainer>
      <Footer />
    </>
  );
}
