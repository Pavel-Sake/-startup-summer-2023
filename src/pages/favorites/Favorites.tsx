import React from "react";
import { Link } from "react-router-dom";


import { Button } from "@mantine/core";

import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";

import favoritesImg from "../../assets/icons/favorites.png";
import { getFavoritesId } from "../../utilities/getFavoritesId";

import {useGetVacanciesByIdQuery} from "../../services/startupSummerApi";
import {getStringBasedArrForRequest} from "../../utilities/getStringBasedArrForRequest";

function Favorites() {
  
  const favoritesId = getFavoritesId();

  const stringForRequest = getStringBasedArrForRequest(favoritesId);


  const { data, error, isLoading } = useGetVacanciesByIdQuery(stringForRequest);


  
  return (
    <div className={commonStyles.wrapperSizeM}>
      {/*<div className={styles.emptyPage}>*/}
      {/*  <img className={styles.images} src={favoritesImg} alt="favorites img" />*/}
      {/*  <div className={styles.text}>Упс, здесь еще ничего нет!</div>*/}
      {/*  <Button variant="light" >*/}
      {/*    <Link className={styles.buttonLink} to="/"> Поиск Вакансий</Link>*/}
      {/*  </Button>*/}
      {/*</div>*/}

      {
        error ? (<div>error</div>)
          : isLoading ? (<div>loading</div>)
            : data ? (<div>data</div>)
              : null
      }
    </div>
  );
}


export { Favorites };