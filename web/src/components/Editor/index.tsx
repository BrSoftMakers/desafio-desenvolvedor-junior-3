import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import * as S from "./style";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
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
      <aside>{/* <h1>ok</h1> */}</aside>
    </S.Container>
  );
}
