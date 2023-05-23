import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPageNumber {
  pageNumber: number,
}

export const initialState: IPageNumber = {
  pageNumber: 0,
};

export const pageNumberFavoriteSlice = createSlice({
  name: "pageNumber",
  initialState,
  reducers: {
    setPageNumberFavorite(state, action: PayloadAction<IPageNumber>) {
      state.pageNumber = action.payload.pageNumber;
    },
  },
});

export const pageNumberFavoriteAction = pageNumberFavoriteSlice.actions;

export const pageNumberFavoriteReducer = pageNumberFavoriteSlice.reducer;
