import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";
import favoritesImg from "../../assets/icons/favorites.png";
import { getFavoritesId } from "../../utilities/getFavoritesId";
import { useGetVacanciesByIdQuery } from "../../services/startupSummerApi";
import { getStringBasedArrForRequest } from "../../utilities/getStringBasedArrForRequest";
import { JobVacancyList } from "../../components/jobVacancyList/JobVacancyList";
import { FavoritesEmpty } from "./FavoritesEmpty";
import { useAppSelector } from "../../hooks/redux";
import { PaginationComponent } from "../../components/paginationComponent/PaginationComponent";
import { getRequestParamsFavorite } from "../../utilities/getRequestParamsFavorite";
import { Loader } from "../../components/loader/Loader";


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
          <FavoritesEmpty />
          :
          <>
            {
              error ? (<div>error</div>)
                : isLoading ? (<Loader />)
                  : data ? (
                    <>
                      <JobVacancyList data={data} />
                      {/*change later place name*/}
                      <PaginationComponent place="favorite" />
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