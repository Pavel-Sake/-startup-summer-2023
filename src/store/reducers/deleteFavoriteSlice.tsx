import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  favoriteToggle: false
};

const favoritesSlice = createSlice({
  name: "deleteFavorite",
  initialState,
  reducers: {
    deleteFavorites(state) {
      state.favoriteToggle = !state.favoriteToggle;
    }
  }
});

export const deleteFavoriteAction = favoritesSlice.actions;

export const deleteFavoriteReducer = favoritesSlice.reducer;