import React from "react";

import { JobVacancyItem } from "./JobVacancyItem";
import { ServerResponseVacancy } from "../../models/modelsVacancy";

import styles from "./JobVacancyList.module.css";


type JobVacancyListProps = {
  data: ServerResponseVacancy[];
}

function JobVacancyList({ data }: JobVacancyListProps) {
  if (!data) {
    return null;
  }

  return (
    <ul className={styles.listVacancy}>
      {
        data.map((item: ServerResponseVacancy) => {
          return <JobVacancyItem
            key={item.id}
            data={item}
            stileSize="sizeM"
            isLink={true}
            vacancyItemsNumberOnPage={data.length}
          />;
        })
      }
    </ul>
  );
}

export { JobVacancyList };
