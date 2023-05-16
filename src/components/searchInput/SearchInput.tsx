import React, {useRef, useState} from "react";
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { searchInputSliceAction } from "../../store/reducers/searchSlice";

function SearchInput() {

  const { searchWords } = useAppSelector(state => state.searchInputSliceReducer);

  const [textInputValue,setTextInputValue] = useState(searchWords);

  const { setSearchInput } = searchInputSliceAction;
  const dispatch = useAppDispatch();

  function handleClickInput(): void {
    dispatch(setSearchInput(textInputValue));
  }

  function handleTextInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setTextInputValue(event.target.value);
  }
  
  return (
    <div>
      <TextInput
        onChange={(event) => handleTextInput(event)}
        value={textInputValue}
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

