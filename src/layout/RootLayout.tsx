import React from "react";
import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.css";


function RootLayout() {
  
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}


export { RootLayout };