import React from "react";

import styles from "./styles.module.css";

function Nav() {
  
  return (
    <ul className={styles.navList}>
      <li className={styles.itemList}>Поиск Вакансий</li>
      <li className={styles.itemList}>Избраное</li>
    </ul>
  );
}

export { Nav };