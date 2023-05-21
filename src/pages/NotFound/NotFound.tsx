import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <p>Страница не найдена</p>
      <Link className={styles.itemLink} to="/">
        Перейдите на главную страницу
      </Link>
    </div>
  );
}

export { NotFound };