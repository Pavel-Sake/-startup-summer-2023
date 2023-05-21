import { useAppSelector } from "../hooks/redux";
import { PAGINATION_PLACE } from "../constans/constans";

function getActivePage(place: string) {
  switch (place) {
  case PAGINATION_PLACE.MAIN:
    const pageNumberMain = useAppSelector(state => state.pageNumberReducer);
    return pageNumberMain.pageNumber + 1;
    break;
  case PAGINATION_PLACE.FAVORITE:
    const pageNumberFavorite = useAppSelector(state => state.pageNumberFavoriteReducer);
    return pageNumberFavorite.pageNumber + 1;
    break;
  default:
    return 0;
  }
}

export { getActivePage };