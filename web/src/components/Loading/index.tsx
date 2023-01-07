import React from "react";
import * as S from "./style";

export default function Loading() {
  return (
    <S.Container>
      <S.Typewriter>
        <div className="slide">
          <i />
        </div>
        <div className="paper" />
        <div className="keyboard" />
      </S.Typewriter>
    </S.Container>
  );
}
