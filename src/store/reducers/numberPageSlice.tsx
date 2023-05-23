import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPageNumber {
  pageNumber: number,
}

export const initialState: IPageNumber = {
  pageNumber: 0,
};

export const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState,
  reducers: {
    setPageNumber(state, action: PayloadAction<IPageNumber>) {
      state.pageNumber = action.payload.pageNumber;
    },
  },
});

export const pageNumberAction = pageNumberSlice.actions;

export const pageNumberReducer = pageNumberSlice.reducer;
