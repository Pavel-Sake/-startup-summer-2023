import React from "react";
import { NavLinkItem } from "../navLinkItem/NavLinkItem";
import { routs } from "../../routes/routes";

import styles from "./styles.module.css";


function Nav() {
  
  return (
    <ul className={styles.navList}>
      {
        routs.map((item) => {
          return (
            <NavLinkItem key={item.index} value={item.value} path={item.path} />
          );
        })
      }
    </ul>
  );
}


export { Nav };