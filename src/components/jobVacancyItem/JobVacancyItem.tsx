import React from "react";

import styles from "./styles.module.css";
import locationImg from "../../assets/icons/locationImg.png";

import starWhite from "../../assets/icons/starWhite.png";
// import starBlue from "../../assets/icons/starBlue.png";
import { Link } from "react-router-dom";

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
  const vacancyId = `/${data.id}`;

  const typeOfWork = style[stileSize].typeOfWork;
  const salary = style[stileSize].salary;
  const blockRow = style[stileSize].blockRow;


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
      <button className={styles.buttonFavorite}>
        <img src={starWhite} alt="star icon" />
      </button>
    </li>
  );
}

export { JobVacancyItem };