import React from "react";

import { getFavoritesIds } from "../../utilities/favarites";
import { useGetAccessTokenRefreshQuery, useGetVacanciesByIdQuery } from "../../services/startupSummerApi";
import { getStringBasedArrForRequest } from "../../utilities/getStringBasedArrForRequest";
import { JobVacancyList } from "../../components/JobVacancyList/JobVacancyList";
import { useAppSelector } from "../../hooks/redux";
import { PaginationComponent } from "../../components/PaginationComponent/PaginationComponent";
import { getRequestParamsFavorite } from "../../utilities/getRequestParamsFavorite";
import { Loader } from "../../components/Loader";
import { EmptyVacancy } from "../../components/EmptyVacancy";
import { Error } from "../../components/Error";
import { checkAndSetIsTokenExpired } from "../../utilities/accessToken";
import { setAccessToken } from "../../utilities/accessToken";

import { PAGINATION_PLACE, LOCAL_STORAGE_NAMES } from "../../constans/constans";

import styles from "./Favorites.module.css";
import commonStyles from "../../commonStyles/styles.module.css";

function Favorites() {
  const favoritesId = getFavoritesIds();
  const stringForRequest = getStringBasedArrForRequest(favoritesId);

  const { pageNumber } = useAppSelector(state => state.pageNumberFavoriteReducer);
  const params = getRequestParamsFavorite(stringForRequest, pageNumber);

  const isTokenExpired = localStorage.getItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED);
  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: isTokenExpired === "1" || isTokenExpired === undefined
  });
  setAccessToken(refreshData.data);

  const { data, error, isLoading } = useGetVacanciesByIdQuery(params);
  checkAndSetIsTokenExpired(error);


  const reRenderPage = useAppSelector(state => state.deleteFavoriteReducer);

  
  return (
    <div className={`${commonStyles.wrapperSizeM} ${styles.favorite}`}>
      {
        !favoritesId.length ?
          <EmptyVacancy />
          :
          <>
            {
              error ? (<Error />)
                : isLoading ? (<Loader />)
                  : data ? (
                    <>
                      <JobVacancyList data={data} />
                      {/*change later place name*/}
                      <PaginationComponent place={PAGINATION_PLACE.FAVORITE} />
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