import React from "react";
import { useParams } from "react-router-dom";
import { JobVacancyItem } from "../../components/jobVacancyItem/JobVacancyItem";
import { NotFound } from "../notFound/NotFound";

import { useGetAccessTokenRefreshQuery, useGetVacancyQuery } from "../../services/startupSummerApi";
import { Loader } from "../../components/loader/Loader";

import styles from "./styles.module.css";
import stylesCommon from "../../commonStyles/styles.module.css";
import { Error } from "../../components/error/Error";
import { setAndCheckTokenIsExpired } from "../../utilities/setAndCheckTokenIsExpired";
import { ACCESS_TOKEN, IS_TOKEN_EXPIRED } from "../../constans/localStorageName";
import { setAccessTokenToLocal } from "../../utilities/setAccessTokenToLocal";


function Vacancy() {
  const { vacancyId } = useParams();

  const isTokenExpired = localStorage.getItem(IS_TOKEN_EXPIRED);
  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: isTokenExpired === "1" || isTokenExpired === undefined
  });
  setAccessTokenToLocal(refreshData.data);

  const { data, error, isLoading } = useGetVacancyQuery(vacancyId);// check the wrong ID with word
  setAndCheckTokenIsExpired(error);


  if (data) {
    if (!data.id) {
      return <NotFound />;
    }
  }

  return (
    <div className={`${stylesCommon.wrapperSizeM} ${styles.vacancy}`}>
      {
        error ? (
          <Error />
        ) : isLoading ? (
          <Loader />
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