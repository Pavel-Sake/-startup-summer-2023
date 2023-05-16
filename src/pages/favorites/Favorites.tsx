import React from "react";
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


function Favorites() {
  
  const favoritesId = getFavoritesId();
  const stringForRequest = getStringBasedArrForRequest(favoritesId);
  const { data, error, isLoading } = useGetVacanciesByIdQuery(stringForRequest);
  
  
  return (
    <div className={commonStyles.wrapperSizeM}>
      {
        !favoritesId.length ?
          <FavoritesEmpty />
          :
          <>
            {
              error ? (<div>error</div>)
                : isLoading ? (<div>loading</div>)
                  : data ? (
                    <JobVacancyList data={data} />
                  )
                    : null
            }
          </>
      }
    </div>
  );
}


export { Favorites };