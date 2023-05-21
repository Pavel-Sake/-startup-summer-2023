import React from "react";
import { Form } from "../../components/Form/Form";
import { JobVacancyList } from "../../components/JobVacancyList/JobVacancyList";
import {
  useGetVacanciesQuery,
  useGetAccessTokenRefreshQuery
} from "../../services/startupSummerApi";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Loader } from "../../components/Loader/Loader";
import { PAGINATION_PLACE, LOCAL_STORAGE_NAMES } from "../../constans/constans";
import { useAppSelector } from "../../hooks/redux";
import { getRequestParams } from "../../utilities/getRequestParams";
import { PaginationComponent } from "../../components/PaginationComponent";
import { Error } from "../../components/Error";
import { checkAndSetIsTokenExpired } from "../../utilities/accessToken";
import { setAccessToken } from "../../utilities/accessToken";

import styles from "./Main.module.css";
import commonStyles from "../../commonStyles/styles.module.css";


function Main() {

  const dataFromForm = useAppSelector(state => state.vacancyFilterReducer);
  const { searchWords } = useAppSelector(state => state.searchInputSliceReducer);
  const { pageNumber } = useAppSelector(state => state.pageNumberReducer);


  const requestParams = getRequestParams(dataFromForm, searchWords, pageNumber);


  const isTokenExpired = localStorage.getItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED);

  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: isTokenExpired === "1" || isTokenExpired === undefined
  });
  setAccessToken(refreshData.data);


  const { data, error, isLoading } = useGetVacanciesQuery(requestParams);
  checkAndSetIsTokenExpired(error);

  return (
    <main className={`${styles.main} ${commonStyles.wrapper}`}>
      <Form />
      {/*later change class rightSide*/}
      <div className={styles.rightSide}>
        <SearchInput />
        {
          error ? (<Error />)
            : isLoading ? (<Loader />)
              : data ? (<JobVacancyList data={data} />)
                : null
        }
        <PaginationComponent place={PAGINATION_PLACE.MAIN} />
      </div>
    </main>
  );
}


export { Main };