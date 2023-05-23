import React from "react";

import { getFavoritesIds } from "../../utilities/favarites";
import { useGetVacanciesByIdQuery } from "../../services/startupSummerApi";
import { JobVacancyList } from "../../components/JobVacancyList";
import { useAppSelector } from "../../hooks/redux";
import { WrapperPagination } from "../../components/WrapperPagination";
import { createRequestParamsForFavoriteVacancies } from "../../utilities/requestParams";
import { Loader } from "../../components/Loader";
import { EmptyVacancy } from "../../components/EmptyVacancy";
import { Error } from "../../components/Error";
import { checkAndSetIsTokenExpired } from "../../utilities/tokens";

import { PAGINATION_PLACE } from "../../constans/constans";

import styles from "./Favorites.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import { useAuth } from "../../hooks/useAuth";

function Favorites() {
  const favoritesIds = getFavoritesIds();

  const { pageNumber } = useAppSelector(state => state.pageNumberFavoriteReducer);

  const params = createRequestParamsForFavoriteVacancies(favoritesIds, pageNumber);

  const isLoadingAuth = useAuth();

  const { data, error, isLoading } = useGetVacanciesByIdQuery(params, {
    skip: isLoadingAuth,
  });
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
                      <JobVacancyList
                        data={data.objects}
                      />
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
