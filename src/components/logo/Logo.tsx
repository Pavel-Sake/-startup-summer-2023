import React from "react";

import logoIcon from "../../assets/icons/UnionLogo.png";
import styles from "./styles.module.css";
function Logo() {
  
  return (
    <div className={styles.logoBlock}>
      <img className={styles.lagoImg} src={logoIcon} alt="logo Img" />
      <h1 className={styles.lagoText}>Jobored</h1>
    </div>
  );
}

export { Logo };