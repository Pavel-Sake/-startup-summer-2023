import React from "react";
import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";
import { getFavoritesId } from "../../utilities/getFavoritesId";
import { useGetVacanciesByIdQuery } from "../../services/startupSummerApi";
import { getStringBasedArrForRequest } from "../../utilities/getStringBasedArrForRequest";
import { JobVacancyList } from "../../components/jobVacancyList/JobVacancyList";
import { useAppSelector } from "../../hooks/redux";
import { PaginationComponent } from "../../components/paginationComponent/PaginationComponent";
import { getRequestParamsFavorite } from "../../utilities/getRequestParamsFavorite";
import { Loader } from "../../components/loader/Loader";
import { PAGINATION_PLACE } from "../../constans/paginationPlace";

import { EmptyVacancy } from "../../components/emptyVacancy/EmptyVacancy";


function Favorites() {
  
  const favoritesId = getFavoritesId();
  const stringForRequest = getStringBasedArrForRequest(favoritesId);

  const { pageNumber } = useAppSelector(state => state.pageNumberFavoriteReducer);


  const params = getRequestParamsFavorite(stringForRequest, pageNumber);

  const { data, error, isLoading } = useGetVacanciesByIdQuery(params);


  const reRenderPage = useAppSelector(state => state.deleteFavoriteReducer);

  
  return (
    <div className={`${commonStyles.wrapperSizeM} ${styles.favorite}`}>
      {
        !favoritesId.length ?
          <EmptyVacancy />
          :
          <>
            {
              error ? (<div>error</div>)
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