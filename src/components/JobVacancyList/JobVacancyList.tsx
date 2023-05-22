import React from "react";

import { JobVacancyItem } from "./JobVacancyItem";
import { EmptyVacancy } from "../EmptyVacancy";

import styles from "./JobVacancyList.module.css";
import { ServerResponseVacancy } from "../../models/modelsVacancy";

type JobVacancyListProps = {
  data: ServerResponseVacancy[];
}

function JobVacancyList({ data }: JobVacancyListProps) {
  if (!data) {
    return null;
  }
  
  if (data.length === 0) {
    return <EmptyVacancy />;
  }

  return (
    <ul className={styles.listVacancy}>
      {
        data.map((item: ServerResponseVacancy) => {
          return <JobVacancyItem key={item.id} data={item} stileSize="sizeM" isLink={true} />;
        })
      }
    </ul>
  );
}

export { JobVacancyList };