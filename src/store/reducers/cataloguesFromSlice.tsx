import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilter {
  cataloguesKey: string,
  salaryMin: string,
  salaryMax: string,
}

export const initialState: IFilter = {
  cataloguesKey: "",
  salaryMin: "",
  salaryMax: ""
};

export const vacancySlice = createSlice({
  name: "vacancyFilter",
  initialState,
  reducers: {
    setFilterForm(state, action: PayloadAction<IFilter>) {
      state.cataloguesKey = action.payload.cataloguesKey;
      state.salaryMin = action.payload.salaryMin;
      state.salaryMax = action.payload.salaryMax;
    }
  }
});

export const vacancyFilterAction = vacancySlice.actions;
export const vacancyFilterReducer = vacancySlice.reducer;