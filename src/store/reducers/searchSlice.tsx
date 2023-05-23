import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ISearch {
  searchValue: string,
}
export const initialState: ISearch = {
  searchValue: "",
};

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const searchInputAction = searchInputSlice.actions;
export const searchInputReducer = searchInputSlice.reducer;
