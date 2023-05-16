import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { vacancyFilterReducer } from "./cataloguesFromSlice";

interface ISearch {
  searchWords: string,
}

export const initialState: ISearch = {
  searchWords: "",
};

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchWords = action.payload;
    }
  }
});

export const searchInputSliceAction = searchInputSlice.actions;
export const searchInputSliceReducer = searchInputSlice.reducer;