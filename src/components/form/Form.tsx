import React from "react";
import { Select, NumberInput, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../hooks/redux";
import { vacancyFilterAction } from "../../store/reducers/cataloguesFromSlice";
import { useCatalogues } from "../../hooks/useCatalogues";

import styles from "./styles.module.css";


interface IFilter {
  cataloguesKey: string,
  salaryMin: string,
  salaryMax: string,
}


function Form() {

  const { setFilterForm } = vacancyFilterAction;
  const dispatch = useAppDispatch();

  const cataloguesForSelect = useCatalogues();

  const form = useForm({
    initialValues: {
      cataloguesKey: "",
      salaryMin: "",
      salaryMax: "",
    },
    validate: {
      // salaryMax: (value) => {
      //   console.log("value")
      //   return "dgdfsdf"
      // }
    },
  });

  function handleSubmitForm(values: IFilter) {
    dispatch(setFilterForm(values));
  }

  function handleClickClearForm() {
    const initialValue = {
      cataloguesKey: "",
      salaryMin: "",
      salaryMax: "",
    };

    form.setValues(initialValue);
  }

  return (
    <form className={styles.form} onSubmit={form.onSubmit((values) => handleSubmitForm(values))}>
      <div className={styles.clearBlock}>
        <div className={styles.clearLabel}>Фильтры</div>
        <button className={styles.clearButton} onClick={handleClickClearForm}>
          Сбросить все &times;
        </button>
      </div>
      <Select
        className={styles.select}
        label="Отрасль"
        placeholder="Выберите отрасль"
        rightSection={<IconChevronDown size="1rem" />}
        data={cataloguesForSelect}
        {...form.getInputProps("cataloguesKey")}
      />

      <NumberInput
        label="Оклад"
        placeholder="От"
        max={500000}
        min={0}
        step={500}
        {...form.getInputProps("salaryMin")}
      />
      <NumberInput
        className={styles.numberInputMax}
        placeholder="До"
        max={500000}
        min={0}
        step={500}
        {...form.getInputProps("salaryMax")}
      />

      <Button className={styles.submitButton} type="submit">Submit</Button>
    </form>
  );
}

export { Form };