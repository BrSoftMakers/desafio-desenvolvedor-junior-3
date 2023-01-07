import React from "react";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Footer>
      <a href="https://www.codebyfranklin.cf/" target="_blank" rel="noreferrer">
        <S.CodeBy>
          <span className="credit">©</span>
          <div className="box">
            <span className="franklin">Code by Franklin Ramos</span>
          </div>
        </S.CodeBy>
      </a>
    </S.Footer>
  );
}
