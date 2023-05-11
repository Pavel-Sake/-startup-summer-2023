import React from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

function Vacancy() {

  const { id } = useParams();

  return (
    <div>{id}</div>
  );
}

export { Vacancy };