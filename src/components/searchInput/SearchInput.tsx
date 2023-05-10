import React from "react";
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchInput() {
  
  return (
    <div>
      <TextInput
        size="md"
        placeholder="Введите название вакансии"
        label=""
        radius="8px"
        rightSection={<Button size="xs">Поиск</Button>}
        rightSectionWidth="80"
        icon={<IconSearch size="1rem" />}
      />

    </div>
  );
}

export { SearchInput };

