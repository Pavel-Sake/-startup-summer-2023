import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IVacancyFilter {
  cataloguesKey: string,
  salaryMin: string | number,
  salaryMax: string | number,
}

export const initialState: IVacancyFilter = {
  cataloguesKey: "",
  salaryMin: "",
  salaryMax: "",
};

export const vacancySlice = createSlice({
  name: "vacancyFilter",
  initialState,
  reducers: {
    setVacancyFilter(state, action: PayloadAction<IVacancyFilter>) {
      state.cataloguesKey = action.payload.cataloguesKey;
      state.salaryMin = action.payload.salaryMin;
      state.salaryMax = action.payload.salaryMax;
    },
  }
});

export const vacancyFilterAction = vacancySlice.actions;
export const vacancyFilterReducer = vacancySlice.reducer;