import React from "react";

import { getFavoritesIds } from "../../utilities/favarites";
import { useGetAccessTokenRefreshQuery, useGetVacanciesByIdQuery } from "../../services/startupSummerApi";
import { JobVacancyList } from "../../components/JobVacancyList";
import { useAppSelector } from "../../hooks/redux";
import { WrapperPagination } from "../../components/WrapperPagination";
import { createRequestParamsForFavoriteVacancies } from "../../utilities/requestParams";
import { Loader } from "../../components/Loader";
import { EmptyVacancy } from "../../components/EmptyVacancy";
import { Error } from "../../components/Error";
import { checkAndSetIsTokenExpired, isTokenExpired } from "../../utilities/accessToken";
import { setAccessToken } from "../../utilities/accessToken";

import { PAGINATION_PLACE } from "../../constans/constans";

import styles from "./Favorites.module.css";
import commonStyles from "../../styles/commonStyles.module.css";

function Favorites() {
  const favoritesIds = getFavoritesIds();

  const { pageNumber } = useAppSelector(state => state.pageNumberFavoriteReducer);
  const params = createRequestParamsForFavoriteVacancies(favoritesIds, pageNumber);

  const isTokenExpiredValue = isTokenExpired();

  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: !isTokenExpiredValue
  });

  setAccessToken(refreshData.data);

  const { data, error, isLoading } = useGetVacanciesByIdQuery(params);
  checkAndSetIsTokenExpired(error);

  useAppSelector(state => state.favoriteReducer);
  
  return (
    <div className={`${commonStyles.wrapperSizeM} ${styles.favorite}`}>
      {
        !favoritesIds.length ?
          <EmptyVacancy />
          :
          <>
            {
              error ? (<Error />)
                : isLoading ? (<Loader />)
                  : data ? (
                    <>
                      <JobVacancyList data={data.objects} />
                      <WrapperPagination
                        place={PAGINATION_PLACE.FAVORITE}
                        totalNumberItems={favoritesIds.length}
                      />
                    </>
                  )
                    : null
            }
          </>
      }
    </div>
  );
}


export { Favorites };