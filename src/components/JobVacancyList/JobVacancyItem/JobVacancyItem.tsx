import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addOrDeleteFavoritesToStore, isFavoriteVacancy } from "../../../utilities/favarites";
import { favoriteAction } from "../../../store/reducers/favoriteSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import notFavoriteStartImage from "../../../assets/icons/notFavoriteStartImage.png";
import favoriteStartImage from "../../../assets/icons/favoriteStartImage.png";

import locationImg from "../../../assets/icons/locationImg.png";
import styles from "./JobVacancyItem.module.css";
import { ServerResponseVacancy } from "../../../models/modelsVacancy";
import {setPageNumberToStore} from "../../../utilities/setPageNumberToStore";
import {PAGINATION_PLACE} from "../../../constans/constans";


type JobVacancyItemProps = {
  data: ServerResponseVacancy;
  stileSize: "sizeM" | "sizeS";
  isLink: boolean;
  vacancyItemsNumberOnPage?: number
}

function JobVacancyItem({ data, stileSize, isLink, vacancyItemsNumberOnPage = 0 }: JobVacancyItemProps) {
  const dispatch = useAppDispatch();
   
  const isFavoriteByDefault = isFavoriteVacancy(data.id);

  const [isFavorite, setIsFavorite] = useState<boolean>(isFavoriteByDefault);

  const { pageNumber } = useAppSelector(state => state.pageNumberFavoriteReducer); //--------

  function handleClickFavorite(id: number): void {
    addOrDeleteFavoritesToStore(id);

    const isVacancyFavorite = isFavoriteVacancy(id);
    setIsFavorite(isVacancyFavorite);

    dispatch(favoriteAction.toggleFavorite());

    if (vacancyItemsNumberOnPage === 1 && pageNumber !== 0) {
      setPageNumberToStore(PAGINATION_PLACE.FAVORITE, pageNumber, dispatch);
    }
  }

  const favoriteButtonImage = isFavorite ? favoriteStartImage : notFavoriteStartImage;

  const blockRowStyleSize = `blockRow--${stileSize}`;
  const salaryStyleSize = `salary--${stileSize}`;
  const typeOfWorkStyleSize = `typeOfWork--${stileSize}`;

  return (
    <li
      data-elem={`vacancy-${data.id}`}
      className={styles.item}>
      <div>
        {
          isLink ?
            <Link className={styles.nameLink} to={`/vacancy/${data.id}`}>{data.profession}</Link> :
            <div className={styles.name}>{data.profession}</div>
        }
        <div className={`${styles.blockRow} ${styles[blockRowStyleSize]}`}>
          <p className={`${styles.salary} ${styles[salaryStyleSize]}`}>з/п от {data.payment_from} rub</p>
          <p className={styles.mark}>&bull;</p>
          <p className={`${styles.typeOfWork} ${styles[typeOfWorkStyleSize]}`}>{data.type_of_work.title}</p>
        </div>
        <div className={styles.blockRow}>
          <img className={styles.locationImg} src={locationImg} alt="location img" />
          <p className={styles.city}>{data.town.title}</p>
        </div>
      </div>
      <button
        data-elem={`vacancy-${data.id}-shortlist-button`}
        className={styles.buttonFavorite}
        onClick={() => handleClickFavorite(data.id)}
      >
        <img className={styles.buttonFavoriteImg} src={favoriteButtonImage} alt="star icon" />
      </button>
    </li>
  );
}

export { JobVacancyItem };