import React from "react";
import { Select, NumberInput, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

import { useAppDispatch } from "../../../hooks/redux";
import { vacancyFilterAction } from "../../../store/reducers/vacancyFilterSlice";
import { useCatalogues } from "../../../hooks/useCatalogues";

import styles from "./VacancyFilterForm.module.css";

interface IFilter {
  cataloguesKey: string,
  salaryMin: string | number,
  salaryMax: string | number,
}

const initialValues: IFilter = {
  cataloguesKey: "",
  salaryMin: "",
  salaryMax: "",
};

function VacancyFilterForm() {
  const dispatch = useAppDispatch();

  const catalogues = useCatalogues();

  const form = useForm({
    initialValues: initialValues,
    validate: {
      salaryMax: () => {
        const { salaryMin, salaryMax } = form.values;

        if (salaryMin !== "" && salaryMax !== "") {
          if (salaryMin > salaryMax) {
            return "Макс зарплата должна быть больше мин";
          }
        }
      },
    },
  });

  function handleSubmitForm(values: IFilter) {
    dispatch(vacancyFilterAction.setVacancyFilter(values));
  }

  function handleClickClearForm() {
    form.setValues(initialValues);
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
        data-elem="industry-select"
        className={styles.select}
        label="Отрасль"
        placeholder="Выберите отрасль"
        rightSection={<IconChevronDown size="1rem" />}
        data={catalogues}
        {...form.getInputProps("cataloguesKey")}
      />
      <NumberInput
        data-elem="salary-from-input"
        label="Оклад"
        placeholder="От"
        max={500000}
        min={0}
        step={500}
        {...form.getInputProps("salaryMin")}
      />
      <NumberInput
        data-elem="salary-to-input"
        className={styles.numberInputMax}
        placeholder="До"
        max={500000}
        min={0}
        step={500}
        {...form.getInputProps("salaryMax")}
      />
      <Button
        data-elem="search-button"
        className={styles.submitButton}
        type="submit"
      >
        Применить
      </Button>
    </form>
  );
}

export { VacancyFilterForm };
