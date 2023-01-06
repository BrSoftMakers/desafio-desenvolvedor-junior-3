/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import plane from "../../assets/images/plane.svg";
import api from "../../lib/api";
import useAuth from "../../hooks/useAuth";
import editorConfig from "../../helpers/editorConfig";
import GoBack from "../GoBack";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.split("/")[3];

  useEffect(() => {
    useAuth();
  }, []);

  const getPost = async () => {
    try {
      const { data } = await api.get(`/posts/${postId}`);
      setTitle(data.title);
      setSubtitle(data.subtitle);
      setContent(data.content);
    } catch (error) {
      console.error(error);
    }
  };

  if (postId) {
    useEffect(() => {
      getPost();
    }, [postId]);
  }

  const onSubmitPost = async () => {
    try {
      const { data } = await api[postId ? "put" : "post"]("/posts", {
        title,
        subtitle,
        content,
      });
      navigate(`/blog/post/${data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <GoBack />
      <div className="inner">
        <S.Form>
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subtítulo"
            value={subtitle}
            onChange={({ target }) => setSubtitle(target.value)}
          />
          <JoditEditor
            ref={editor}
            value={content}
            config={editorConfig}
            onBlur={(newContent) => setContent(newContent)}
          />
        </S.Form>
        <S.Column>
          <button type="button" onClick={() => onSubmitPost()}>
            <span className="text">{postId ? "Atualizar" : "Publicar"}</span>
            <img src={plane} alt="plane" />
          </button>
        </S.Column>
      </div>
    </S.Container>
  );
}
