import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import locationImg from "../../assets/icons/locationImg.png";

import { Link } from "react-router-dom";
import { addDeleteFavorites } from "../../utilities/addDeleteFavorites";
import { getFavoritesId } from "../../utilities/getFavoritesId";
import { isFavorite } from "../../utilities/isFavorite";

import starWhite from "../../assets/icons/starWhite.png";
import starBlue from "../../assets/icons/starBlue.png";


type MyProps = {
  data: any;
  stileSize: string;
  isLink: boolean
}


const style: any = {
  sizeM: {
    typeOfWork: "typeOfWork--size-m",
    salary: "salary--size-m",
    blockRow: "blockRow--size-m"
  },
  sizeS: {
    typeOfWork: "typeOfWork--size-s",
    salary: "salary--size-s",
    blockRow: "blockRow--size-s"
  }
};


function JobVacancyItem({ data, stileSize, isLink }: MyProps) {

  const favoritesIds = getFavoritesId();
  const isVacancyFavoriteI = isFavorite(favoritesIds, data.id);

  const [isVacancyFavorite, setIsVacancyFavorite] = useState<boolean>(isVacancyFavoriteI);

  const vacancyId = `/${data.id}`;
  const typeOfWork = style[stileSize].typeOfWork;
  const salary = style[stileSize].salary;
  const blockRow = style[stileSize].blockRow;

  function handleClickToSaveInStorage(id: number): void {
    addDeleteFavorites(id);

    const favoritesIds = getFavoritesId();
    const isVacancyFavorite = isFavorite(favoritesIds, id);
    setIsVacancyFavorite(isVacancyFavorite);
  }

  const imgForButton = isVacancyFavorite ? starBlue : starWhite;


  return (
    <li className={styles.item}>
      <div>
        {
          isLink ?
            <Link className={styles.nameLink} to={vacancyId}>{data.profession}</Link> :
            <div className={styles.name}>{data.profession}</div>
        }
        <div className={`${styles.blockRow} ${styles[blockRow]}`}>
          <p className={`${styles.salary} ${styles[salary]}`}>з/п от {data.payment_from} rub</p>
          <p className={styles.mark}>&bull;</p>
          <p className={`${styles.typeOfWork} ${styles[typeOfWork]}`}>{data.type_of_work.title}</p>
        </div>
        <div className={styles.blockRow}>
          <img className={styles.locationImg} src={locationImg} alt="location img" />
          <p className={styles.city}>{data.town.title}</p>
        </div>
      </div>
      <button className={styles.buttonFavorite} onClick={() => handleClickToSaveInStorage(data.id)}>
        <img className={styles.buttonFavoriteImg} src={imgForButton} alt="star icon" />
      </button>
    </li>
  );
}

export { JobVacancyItem };