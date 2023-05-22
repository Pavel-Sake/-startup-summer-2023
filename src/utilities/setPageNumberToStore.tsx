import { PAGINATION_PLACE } from "../constans/constans";
import { pageNumberAction } from "../store/reducers/numberPageSlice";
import { pageNumberFavoriteAction } from "../store/reducers/numberPageFavoriteSlice";
import { AppDispatch } from "../store/store";

export function setPageNumberToStore(place: PAGINATION_PLACE, pageNumber: number, dispatch: AppDispatch): void {
  switch (place) {
  case PAGINATION_PLACE.MAIN:
    dispatch(pageNumberAction.setPageNumber({ pageNumber: pageNumber - 1 }));
    break;
  case PAGINATION_PLACE.FAVORITE:
    dispatch(pageNumberFavoriteAction.setPageNumberFavorite({ pageNumber: pageNumber - 1 }));
    break;
  }
}
