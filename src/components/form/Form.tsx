import React, {useEffect} from "react";
import { Select, NumberInput, Button } from "@mantine/core";
import { IconChevronDown, IconChevronUpLeft } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

import styles from "./styles.module.css";

function Form() {

  const form = useForm({
    initialValues: {
      industry: "",
      salaryMin: "",
      salaryMax: "",
    },

    validate: {

    },
  });

  // useEffect(() => {
  //   fetch("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/", {
  //     method: "GET",
  //     headers: {
  //       "x-secret-key": "GEU4nvd3rej*jeh.eqp",
  //       "Content-Type": "application/json"
  //     } })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  
  return (
    <form className={styles.form} onSubmit={form.onSubmit((values) => console.log(values))}>
      <div className={styles.clearBlock}>
        <div className={styles.clearLabel}>Фильтры</div>
        <button className={styles.clearButton}>
          Сбросить все &times; &#10006;
        </button>
      </div>
      <Select
        label="Отрасль"
        placeholder="Выберите отрасль"
        rightSection={<IconChevronDown size="1rem" />}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
        {...form.getInputProps("industry")}
      />

      <NumberInput
        label="Оклад"
        placeholder="От"
        max={120}
        min={0}
        {...form.getInputProps("salaryMin")}
      />
      <NumberInput
        placeholder="До"
        max={120}
        min={0}
        {...form.getInputProps("salaryMax")}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export { Form };