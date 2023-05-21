import React from "react";
import { JobVacancyItem } from "../JobVacancyItem/JobVacancyItem";

import styles from "./JobVacancyList.module.css";
import { EmptyVacancy } from "../EmptyVacancy/EmptyVacancy";


type MyProps = {
  data: any;
}

function JobVacancyList({ data }: MyProps) {

  if (!data) {
    return null;
  }
  
  if (data.objects.length === 0) {
    return <EmptyVacancy />;
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