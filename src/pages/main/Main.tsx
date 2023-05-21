import React from "react";
import { Form } from "../../components/form/Form";
import { JobVacancyList } from "../../components/jobVacancyList/JobVacancyList";
import {
  useGetVacanciesQuery,
  useGetAccessTokenRefreshQuery
} from "../../services/startupSummerApi";
import { SearchInput } from "../../components/searchInput/SearchInput";
import { Loader } from "../../components/loader/Loader";
import { PAGINATION_PLACE } from "../../constans/paginationPlace";
import { useAppSelector } from "../../hooks/redux";
import { getRequestParams } from "../../utilities/getRequestParams";
import { PaginationComponent } from "../../components/paginationComponent/PaginationComponent";
import { Error } from "../../components/error/Error";
import { IS_TOKEN_EXPIRED } from "../../constans/localStorageName";
import { setAndCheckTokenIsExpired } from "../../utilities/setAndCheckTokenIsExpired";
import { setAccessTokenToLocal } from "../../utilities/setAccessTokenToLocal";

import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";


function Main() {

  const dataFromForm = useAppSelector(state => state.vacancyFilterReducer);
  const { searchWords } = useAppSelector(state => state.searchInputSliceReducer);
  const { pageNumber } = useAppSelector(state => state.pageNumberReducer);


  const requestParams = getRequestParams(dataFromForm, searchWords, pageNumber);


  const isTokenExpired = localStorage.getItem(IS_TOKEN_EXPIRED);

  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: isTokenExpired === "1" || isTokenExpired === undefined
  });
  setAccessTokenToLocal(refreshData.data);


  const { data, error, isLoading } = useGetVacanciesQuery(requestParams);
  setAndCheckTokenIsExpired(error);

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