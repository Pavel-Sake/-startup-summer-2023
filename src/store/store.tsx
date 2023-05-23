import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { startupSummerApi } from "../services/startupSummerApi";
import { vacancyFilterReducer } from "./reducers/vacancyFilterSlice";
import { favoriteReducer } from "./reducers/favoriteSlice";
import { searchInputReducer } from "./reducers/searchSlice";
import { pageNumberReducer } from "./reducers/numberPageSlice";
import { pageNumberFavoriteReducer } from "./reducers/numberPageFavoriteSlice";

const rootReducer = combineReducers({
  vacancyFilterReducer,
  searchInputReducer,
  favoriteReducer,
  pageNumberReducer,
  pageNumberFavoriteReducer,
  [startupSummerApi.reducerPath]: startupSummerApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(startupSummerApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
