import React from "react";
import './styles.css';

import logoHeader from "../../assets/logoHeader.svg";

function Header() {
  return (
    <div className="container__img">
      <img src={logoHeader} alt="Profile"></img>
    </div>

  );
}

export default Header;