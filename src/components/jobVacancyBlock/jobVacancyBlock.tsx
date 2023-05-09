import React from "react";
import { JobVacancyItem } from "../jobVacancyItem/JobVacancyItem";

import styles from "./styles.module.css";


type MyProps = {
  data: any;
}

function JobVacancyBlock({ data }: MyProps) {

  console.log(data);
  return (
    <ul>
      {
        data.objects.map((item: any) => {
          return <JobVacancyItem data={item} />;
        })
      }
    </ul>
  );
}

export { JobVacancyBlock };