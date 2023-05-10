import React, { useState } from "react";
import { Select, NumberInput, Button, SelectItem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

import styles from "./styles.module.css";
import { useGetCataloguesQuery } from "../../services/startupSummerApi";
import { ServerResponseCatalogues } from "../../models/modelsCatalogues";

interface IStateForSelect {
  value: string,
  label: string,
}

function Form() {
  
  const [cataloguesForSelect, setCataloguesForSelect] = useState<IStateForSelect[]>([]);
  const [catalogues, setCatalogues] = useState<ServerResponseCatalogues[] | null>(null);

  const { data, error, isLoading } = useGetCataloguesQuery("text", {
    skip: cataloguesForSelect.length > 0
  });

  if (data) {
    const newArr: IStateForSelect[] = [];

    setCatalogues(data);

    data.forEach((item, index) => {

      const obj = {
        value: `${index}`,
        label: item.title_rus,
      };
      newArr.push(obj);
    });
    setCataloguesForSelect(newArr);
  }

  const form = useForm({
    initialValues: {
      cataloguesId: "",
      salaryMin: "",
      salaryMax: "",
    },

    validate: {

    },
  });

  function showData(values: any) {

    console.log(values)

    if (catalogues) {
      console.log("catalogues", catalogues[values.catalogues])
    }
  }

  return (
    <form className={styles.form} onSubmit={form.onSubmit((values) => showData(values))}>
      <div className={styles.clearBlock}>
        <div className={styles.clearLabel}>Фильтры</div>
        <button className={styles.clearButton}>
          Сбросить все &times; &#10006;
        </button>
      </div>
      <Select
        className={styles.select}
        label="Отрасль"
        placeholder="Выберите отрасль"
        rightSection={<IconChevronDown size="1rem" />}
        data={cataloguesForSelect}
        {...form.getInputProps("cataloguesId")}
      />

      <NumberInput
        label="Оклад"
        placeholder="От"
        max={120}
        min={0}
        {...form.getInputProps("salaryMin")}
      />
      <NumberInput
        className={styles.numberInputMax}
        placeholder="До"
        max={120}
        min={0}
        {...form.getInputProps("salaryMax")}
      />

      <Button className={styles.submitButton} type="submit">Submit</Button>
    </form>
  );
}

export { Form };