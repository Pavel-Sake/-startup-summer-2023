import React from "react";
import { Form } from "../../components/form/Form";
import { JobVacancyBlock } from "../../components/jobVacancyBlock/jobVacancyBlock";
import { useGetVacanciesQuery } from "../../services/startupSummerApi";
import { fetchGetAccessKey } from "../../services/getAccessKey";


import styles from "./styles.module.css";


function Main() {


  const accessKey = localStorage.getItem("key");

  if (!accessKey) {
    fetchGetAccessKey()
      .then((res) => {
        localStorage.setItem("key", res.data.access_token);
        const { data, error, isLoading } = useGetVacanciesQuery(4);
      });
  }

  const { data, error, isLoading } = useGetVacanciesQuery(4);


  return (
    <main className={styles.main}>
      <Form />
      {
        !isLoading ? <JobVacancyBlock data={data} /> : <div>Loading</div>
      }


    </main>
  );
}

export { Main };