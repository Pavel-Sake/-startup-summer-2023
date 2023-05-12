import { VACANCY_IDS } from "../constans/constans";

type favoritesType = [] | number[]
function getFavoritesId(): favoritesType {
  const vacancyIds = localStorage.getItem(VACANCY_IDS);
  
  if (vacancyIds) {
    return JSON.parse(vacancyIds);
  } else {
    return [];
  }
  
}

export { getFavoritesId };