import React from "react";
import { Nav } from "../nav/Nav";
import { Logo } from "../logo/Logo";

import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";

function Header() {
  
  return (
    <header className={`${styles.header} ${commonStyles.wrapper}`}>
      <Logo />
      <Nav />
    </header>
  );
}


export { Header };