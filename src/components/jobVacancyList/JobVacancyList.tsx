import React from "react";
import { JobVacancyItem } from "../jobVacancyItem/JobVacancyItem";

import styles from "./styles.module.css";


type MyProps = {
  data: any;
}

function JobVacancyList({ data }: MyProps) {

  if (!data) {
    return null;
  }

  return (
    <ul className={styles.listVacancy}>
      {
        data.objects.map((item: any) => {
          return <JobVacancyItem key={item.id} data={item} stileSize="sizeM" isLink={true} />;
        })
      }
    </ul>
  );
}

export { JobVacancyList };