import React from "react";
import { Form } from "../../components/form/Form";
import { JobVacancyList } from "../../components/jobVacancyList/JobVacancyList";
import { useGetVacanciesQuery, useGetAccessTokenQuery, useGetCataloguesQuery } from "../../services/startupSummerApi";
// import { fetchGetAccessKey } from "../../services/getAccessKey";
import { SearchInput } from "../../components/searchInput/SearchInput";


import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";
import { useAppSelector } from "../../hooks/redux";


const obj = {
  page: 4,
  count: 4
};

function Main() {

  const { cataloguesKey, salaryMin, salaryMax } = useAppSelector(state => state.vacancyFilterReducer);
  const { searchWords } = useAppSelector(state => state.searchInputSliceReducer);

  
  // useEffect(() => {
  //   const accessKey = localStorage.getItem("key");
  //
  //   if (!accessKey) {
  //     fetchGetAccessKey()
  //       .then((res) => {
  //         localStorage.setItem("key", res.data.access_token);
  //       });
  //   }
  // }, []);
  

  const { data, error, isLoading } = useGetVacanciesQuery(obj);


  return (
    <main className={`${styles.main} ${commonStyles.wrapper}`}>
      <Form />
      {/*later change class rightSide*/}
      <div className={styles.rightSide}>
        <SearchInput />
        {
          !isLoading ? <JobVacancyList data={data} /> : <div>Loading</div>
        }
      </div>


    </main>
  );
}

export { Main };