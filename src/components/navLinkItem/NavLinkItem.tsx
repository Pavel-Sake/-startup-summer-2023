import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

type MyProps = {
  value: string;
  path: string,
}
function NavLinkItem({ value, path }: MyProps) {
  
  return (
    <li className={styles.itemList}>
      <NavLink className={styles.itemLink} to={path}>
        {value}
      </NavLink>
    </li>
  );
}

export { NavLinkItem };