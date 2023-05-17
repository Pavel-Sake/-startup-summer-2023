import React from "react";
import { useParams } from "react-router-dom";
import { JobVacancyItem } from "../../components/jobVacancyItem/JobVacancyItem";
import { NotFound } from "../notFound/NotFound";

import { useGetVacancyQuery } from "../../services/startupSummerApi";

import styles from "./styles.module.css";
import stylesCommon from "../../commonStyles/styles.module.css";


function Vacancy() {

  const { vacancyId } = useParams();

  const { data, error, isLoading } = useGetVacancyQuery(vacancyId); // check the wrong ID with word

  if (data) {
    if (!data.id) {
      return <NotFound />;
    }
  }

  return (
    <div className={`${stylesCommon.wrapperSizeM} ${styles.vacancy}`}>
      {
        error ? (
          <NotFound />
        ) : isLoading ? (
          <div>loading</div>
        ) : data ? (
          <div>
            <JobVacancyItem data={data} stileSize="sizeS" isLink={false} />
            <div className={styles.description}>
              <div className={styles.tex} dangerouslySetInnerHTML={{
                __html: `${data.vacancyRichText}`,
              }} />
            </div>
          </div>
        ) :
          null
      }
    </div>
  );
}

export { Vacancy };