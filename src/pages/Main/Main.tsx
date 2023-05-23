import React from "react";
import { useAppSelector } from "../../hooks/redux";

import { VacancyFilterForm } from "./VacancyFilterForm";
import { JobVacancyList } from "../../components/JobVacancyList";
import {
  useGetVacanciesQuery,
} from "../../services/startupSummerApi";
import { SearchInput } from "../../components/SearchInput";
import { Loader } from "../../components/Loader";
import { PAGINATION_PLACE } from "../../constans/constans";
import { createRequestParamsForVacancies } from "../../utilities/requestParams";
import { WrapperPagination } from "../../components/WrapperPagination";
import { Error } from "../../components/Error";
import { checkAndSetIsTokenExpired } from "../../utilities/tokens";

import styles from "./Main.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import { useAuth } from "../../hooks/useAuth";

function Main() {
  const dataFromForm = useAppSelector(state => state.vacancyFilterReducer);
  const { searchValue } = useAppSelector(state => state.searchInputReducer);
  const { pageNumber } = useAppSelector(state => state.pageNumberReducer);

  const requestParams = createRequestParamsForVacancies(dataFromForm, searchValue, pageNumber);

  const isLoadingAuth = useAuth();

  const { data, error, isLoading } = useGetVacanciesQuery(requestParams, {
    skip: isLoadingAuth,
  });
  checkAndSetIsTokenExpired(error);
  
  return (
    <main className={`${styles.main} ${commonStyles.wrapper}`}>
      <VacancyFilterForm />
      <div className={styles.rightSide}>
        <SearchInput />
        {
          error ? (<Error />)
            : isLoading ? (<Loader />)
              : data ? (
                <>
                  <JobVacancyList data={data.objects} />
                  <WrapperPagination
                    place={PAGINATION_PLACE.MAIN}
                    totalNumberItems={data.total}
                  />
                </>
              )
                : null
        }
      </div>
    </main>
  );
}

export { Main };
