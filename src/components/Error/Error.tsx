import React from "react";

import styles from "./Error.module.css";

function Error() {
  return (
    <div className={styles.error}>Что-то пошло не так, перезагрузите страницу.</div>
  );
}

export { Error };