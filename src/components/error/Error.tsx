import React from "react";
import styles from "./styles.module.css";


function Error() {
  
  return (
    <div className={styles.error}>Чтото пошло не так перезагрузите страницу.</div>
  );
}

export { Error };