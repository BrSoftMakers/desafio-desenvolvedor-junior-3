import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import * as S from "./style";
import plane from "../../assets/images/plane.svg";
import api, { setToken } from "../../lib/api";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const editor = useRef(null);

  const config = {
    readonly: false,
    useSearch: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    minHeight: 600,
    buttons:
      "bold,italic,underline,strikethrough,eraser,font,fontsize,paragraph,lineHeight,superscript,subscript,image,video,cut,copy,paste,hr,eraser,undo,redo,source",
  };

  const onSubmitPost = async () => {
    try {
      const token = localStorage.getItem("SMtoken");
      if (token) setToken(JSON.parse(token));

      const { data } = await api.post("/", {
        title,
        subtitle,
        content,
      });
      console.log("🚀 ~ file: index.tsx:31 ~ onSubmitPost ~ data", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Form>
        <input
          type="text"
          placeholder="Titulo"
          onChange={({ target }) => setTitle(target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subtítulo"
          onChange={({ target }) => setSubtitle(target.value)}
        />
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
          //   onChange={(newContent) => setContent(newContent)}
        />
      </S.Form>
      <S.Column>
        <button type="button" onClick={() => onSubmitPost()}>
          <span className="icon">
            <img src={plane} alt="plane" />
            <span className="text">Publicar</span>
          </span>
        </button>
      </S.Column>
    </S.Container>
  );
}
