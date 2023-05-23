import React from "react";
import { useNavigate } from "react-router-dom";

import logoIcon from "../../assets/icons/unionLogo.png";
import styles from "./Logo.module.css";

function Logo() {
  const navigate = useNavigate();
  function handleClickLogo() {
    navigate("/");
  }
  
  return (
    <div
      className={styles.logo}
      onClick={handleClickLogo}
    >
      <img className={styles.lagoImg} src={logoIcon} alt="logo Img" />
      <h1 className={styles.lagoText}>Jobored</h1>
    </div>
  );
}

export { Logo };
