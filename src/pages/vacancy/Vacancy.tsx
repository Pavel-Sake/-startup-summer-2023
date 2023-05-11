import React from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";
import { useGetVacancyQuery } from "../../services/startupSummerApi";

function Vacancy() {

  const { vacancyId } = useParams();

  const { data, error, isLoading } = useGetVacancyQuery(vacancyId); // check the wrong ID with word


  return (

    <div>
      <div>{vacancyId}</div>
      {
        error ? <div>error</div> : <div>ok</div>
      }
    </div>
  );
}

export { Vacancy };