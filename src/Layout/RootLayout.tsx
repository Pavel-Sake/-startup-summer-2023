import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Header />
      <Outlet />
    </div>
  );
}

export { RootLayout };