import React from "react";

import styles from "./styles.module.css";
import locationImg from "../../assets/icons/locationImg.png";

import starWhite from "../../assets/icons/starWhite.png";
// import starBlue from "../../assets/icons/starBlue.png";

type MyProps = {
  data: any;
}

function JobVacancyItem({ data }: MyProps) {

  return (
    <li className={styles.item}>
      <div>
        <div className={styles.name}>{data.profession}</div>
        <div className={styles.blockRow}>
          <p className={styles.salary}>з/п от {data.payment_from} rub</p>
          <p className={styles.mark}>&bull;</p>
          <p className={styles.typeOfWork}>{data.type_of_work.title}</p>
        </div>
        <div className={styles.blockRow}>
          <img className={styles.locationImg} src={locationImg} alt="location img" />
          <p className={styles.city}>{data.town.title}</p>
        </div>
      </div>
      <button className={styles.buttonFavorite}>
        <img src={starWhite} alt="star icon" />
      </button>
    </li>
  );
}

export { JobVacancyItem };