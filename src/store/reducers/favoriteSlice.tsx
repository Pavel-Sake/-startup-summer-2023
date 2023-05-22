import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteToggle: false
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state) {
      state.favoriteToggle = !state.favoriteToggle;
    }
  }
});

export const favoriteAction = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;