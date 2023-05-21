import { PAGINATION_PLACE } from "../constans/constans";
import { pageNumberAction } from "../store/reducers/numberPageSlice";
import { pageNumberFavoriteAction } from "../store/reducers/numberPageFavoriteSlice";
import { AppDispatch } from "../store/store";


const { MAIN, FAVORITE } = PAGINATION_PLACE;


function setPageNumberBasedOnPlace(place: string, value: number, dispatch: AppDispatch): void {

  const { setPageNumber } = pageNumberAction;
  const { setPageNumberFavorite } = pageNumberFavoriteAction;

  switch (place) {
  case MAIN:
    dispatch(setPageNumber({ pageNumber: value - 1 }));
    break;
  case FAVORITE:
    dispatch(setPageNumberFavorite({ pageNumber: value - 1 }));
    break;
  }
}

export { setPageNumberBasedOnPlace };