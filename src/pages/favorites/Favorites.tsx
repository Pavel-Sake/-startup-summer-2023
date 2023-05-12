import React from "react";

import { Button } from '@mantine/core';

import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css"

import favoritesImg from "../../assets/icons/favorites.png";

function Favorites() {
  
  return (
    <div className={commonStyles.wrapperSizeM}>
      <div className={styles.emptyPage}>
        <img className={styles.images} src={favoritesImg} alt="favorites img" />
        <div className={styles.text}>Упс, здесь еще ничего нет!</div>
        <Button variant="light" >
          Поиск Вакансий
        </Button>
      </div>
    </div>
  );
}


export { Favorites };