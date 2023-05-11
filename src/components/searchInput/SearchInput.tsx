import React, { useRef } from "react";
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchInput() {

  const ref = useRef<HTMLInputElement>(null);

  function handleClickInput(): void {
    console.log(ref.current!.value);
  }
  
  return (
    <div>
      <TextInput
        ref={ref}
        size="md"
        placeholder="Введите название вакансии"
        label=""
        radius="8px"
        rightSection={<Button onClick={handleClickInput} size="xs">Поиск</Button>}
        rightSectionWidth="80"
        icon={<IconSearch size="1rem" />}
      />

    </div>
  );
}

export { SearchInput };

