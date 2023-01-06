import React from "react";
import arrowBack from "../../assets/images/arrow-back.svg";
import GoBackButton from "./style";

export default function GoBack() {
  return (
    <GoBackButton type="button" onClick={() => window.history.back()}>
      <img src={arrowBack} alt="Voltar" />
      <span> Voltar </span>
    </GoBackButton>
  );
}
