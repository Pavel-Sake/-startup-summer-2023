import { useAppSelector } from "../hooks/redux";
import { PAGINATION_PLACE } from "../constans/constans";

export function getActivePage(place: PAGINATION_PLACE) {
  switch (place) {
  case PAGINATION_PLACE.MAIN:
    const pageNumberMain = useAppSelector(state => state.pageNumberReducer);

    return pageNumberMain.pageNumber + 1;
  case PAGINATION_PLACE.FAVORITE:
    const pageNumberFavorite = useAppSelector(state => state.pageNumberFavoriteReducer);

    return pageNumberFavorite.pageNumber + 1;
  default:
    return 0;
  }
}
