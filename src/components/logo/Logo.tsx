import React from "react";
import { useNavigate } from "react-router-dom";

import logoIcon from "../../assets/icons/UnionLogo.png";
import styles from "./styles.module.css";

function Logo() {
  const navigate = useNavigate();
  function handleLogoNavigate() {
    navigate("/");
  }
  
  return (
    <div className={styles.logoBlock} onClick={handleLogoNavigate}>
      <img className={styles.lagoImg} src={logoIcon} alt="logo Img" />
      <h1 className={styles.lagoText}>Jobored</h1>
    </div>
  );
}

export { Logo };