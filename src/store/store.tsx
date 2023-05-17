import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { startupSummerApi } from "../services/startupSummerApi";
import { vacancyFilterReducer } from "./reducers/cataloguesFromSlice";
import { deleteFavoriteReducer } from "./reducers/deleteFavoriteSlice";
import { searchInputSliceReducer } from "./reducers/searchSlice";
import { pageNumberReducer } from "./reducers/numberPageSlice";
import { pageNumberFavoriteReducer } from "./reducers/numberPageFavoriteSlice";

const rootReducer = combineReducers({
  vacancyFilterReducer,
  searchInputSliceReducer,
  deleteFavoriteReducer,
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