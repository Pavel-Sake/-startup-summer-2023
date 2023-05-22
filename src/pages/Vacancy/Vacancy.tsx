import React from "react";
import { useParams } from "react-router-dom";

import { JobVacancyItem } from "../../components/JobVacancyList/JobVacancyItem";
import { NotFound } from "../NotFound";
import { useGetAccessTokenRefreshQuery, useGetVacancyQuery } from "../../services/startupSummerApi";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import { isTokenExpired, setAccessToken, checkAndSetIsTokenExpired } from "../../utilities/accessToken";

import styles from "./Vacancy.module.css";
import commonStyle from "../../styles/commonStyles.module.css";

function Vacancy() {
  const { vacancyId } = useParams();

  const isTokenExpiredValue = isTokenExpired();
  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: !isTokenExpiredValue
  });

  setAccessToken(refreshData.data);

  const { data, error, isLoading } = useGetVacancyQuery(vacancyId);
  checkAndSetIsTokenExpired(error);

  
  if (!data?.id) {
    return <NotFound />;
  }

  return (
    <div className={`${commonStyle.wrapperSizeM} ${styles.vacancy}`}>
      {
        error ? (<Error />)
          : isLoading ? (<Loader />)
            : data ? (
              <div>
                <JobVacancyItem data={data} stileSize="sizeS" isLink={false} />
                <div className={styles.description}>
                  <div className={styles.tex} dangerouslySetInnerHTML={{
                    __html: `${data.vacancyRichText}`,
                  }} />
                </div>
              </div>
            )
              : null
      }
    </div>
  );
}

export { Vacancy };