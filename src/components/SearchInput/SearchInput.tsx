import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { searchInputAction } from "../../store/reducers/searchSlice";

import styles from "./SearchInput.module.css";

function SearchInput() {
  const searchInputStore = useAppSelector(state => state.searchInputReducer);
  const [searchValue, setSearchValue] = useState(searchInputStore.searchValue);

  const dispatch = useAppDispatch();

  function handleClickSearchButton(): void {
    dispatch(searchInputAction.setSearchInput(searchValue));
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }
  
  return (
    <div className={styles.searchInputWrapper}>
      <TextInput
        data-elem="search-input"
        onChange={handleChangeInput}
        value={searchValue}
        size="md"
        placeholder="Введите название вакансии"
        label=""
        radius="8px"
        rightSection={<Button data-elem="search-button" onClick={handleClickSearchButton} size="xs">Поиск</Button>}
        rightSectionWidth="80"
        icon={<IconSearch size="1rem" />}
      />
    </div>
  );
}


export { SearchInput };

