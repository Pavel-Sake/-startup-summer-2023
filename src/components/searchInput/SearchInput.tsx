import React from "react";
import { TextInput, Button } from "@mantine/core";

function SearchInput() {
  
  return (
    <div>
      <TextInput
        placeholder="Введите название вакансии"
        label=""
        rightSection={<Button>Поиск</Button>}
      />

    </div>
  );
}

export { SearchInput };

