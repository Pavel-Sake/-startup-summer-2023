import React from "react";
import { Form } from "../../components/form/Form";
import { JobVacancy } from "../../components/jobVacancy/JobVacancy";
import { useGetVacanciesQuery } from "../../services/startupSummerApi";
// import { fetchGetAccessKey } from "../../services/getAccessKey";
import { SearchInput } from "../../components/searchInput/SearchInput";


import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";


function Main() {
  
  
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
  

  const { data, error, isLoading } = useGetVacanciesQuery(4);


  return (
    <main className={`${styles.main} ${commonStyles.wrapper}`}>
      <Form />
      <div>
        <SearchInput />
        {
          !isLoading ? <JobVacancy data={data} /> : <div>Loading</div>
        }
      </div>


    </main>
  );
}

export { Main };