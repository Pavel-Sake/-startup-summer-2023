import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addOrDeleteFavoritesToStore, isFavorite } from "../../utilities/favarites";
import starWhite from "../../assets/icons/starWhite.png";
import starBlue from "../../assets/icons/starBlue.png";
import { favoriteAction } from "../../store/reducers/favoriteSlice";
import { useAppDispatch } from "../../hooks/redux";

import locationImg from "../../assets/icons/locationImg.png";
import styles from "./JobVacancyItem.module.css";


type JobVacancyItemProps = {
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

function JobVacancyItem({ data, stileSize, isLink }: JobVacancyItemProps) {
  const dispatch = useAppDispatch();
   
  const isVacancyFavoriteI = isFavorite(data.id);

  const [isVacancyFavorite, setIsVacancyFavorite] = useState<boolean>(isVacancyFavoriteI);

  const vacancyId = `/vacancy/${data.id}`;
  const typeOfWork = style[stileSize].typeOfWork;
  const salary = style[stileSize].salary;
  const blockRow = style[stileSize].blockRow;

  //change function name later
  function handleClickToSaveInStorage(id: number): void {
    addOrDeleteFavoritesToStore(id);

    const isVacancyFavorite = isFavorite(id);
    setIsVacancyFavorite(isVacancyFavorite);

    dispatch(favoriteAction.deleteFavorite());
  }

  const imgForButton = isVacancyFavorite ? starBlue : starWhite;

  return (
    <li
      data-elem={`vacancy-${data.id}`}
      className={styles.item}>
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
      <button
        data-elem={`vacancy-${data.id}-shortlist-button`}
        className={styles.buttonFavorite}
        onClick={() => handleClickToSaveInStorage(data.id)}
      >
        <img className={styles.buttonFavoriteImg} src={imgForButton} alt="star icon" />
      </button>
    </li>
  );
}

export { JobVacancyItem };