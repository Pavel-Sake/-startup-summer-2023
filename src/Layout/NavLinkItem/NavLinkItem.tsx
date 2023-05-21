import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavLinkItem.module.css";

type NavLinkItemProps = {
  value: string;
  path: string,
}
function NavLinkItem({ value, path }: NavLinkItemProps) {
  return (
    <li className={styles.itemList}>
      <NavLink className={styles.itemLink} to={path}>
        {value}
      </NavLink>
    </li>
  );
}

export { NavLinkItem };