import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import favoritesImg from "../../assets/icons/favorites.png";

import styles from "./styles.module.css";

function EmptyVacancy() {
  return (
    <div className={styles.emptyPage}>
      <img className={styles.images} src={favoritesImg} alt="favorites img" />
      <div className={styles.text}>Упс, здесь еще ничего нет!</div>
      <Button variant="light" >
        <Link className={styles.buttonLink} to="/"> Поиск Вакансий</Link>
      </Button>
    </div>
  );
}

export { EmptyVacancy };
