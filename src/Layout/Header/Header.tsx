import React from "react";

import { Logo } from "../Logo";
import { routs } from "../../routes/routes";
import { NavLinkItem } from "../NavLinkItem";

import styles from "./Header.module.css";
import commonStyles from "../../styles/commonStyles.module.css";

function Header() {
  return (
    <header className={`${styles.header} ${commonStyles.wrapper}`}>
      <Logo />
      <ul className={styles.navList}>
        {
          routs.map((item) => {
            return (
              <NavLinkItem key={item.index} value={item.value} path={item.path} />
            );
          })
        }
      </ul>
    </header>
  );
}

export { Header };