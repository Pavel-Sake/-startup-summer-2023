import { LOCAL_STORAGE_NAMES } from "../constans/constans";

export function addOrDeleteFavoritesToStore(id: number): void {
  const vacancyIds: string | null = localStorage.getItem(LOCAL_STORAGE_NAMES.VACANCY_IDS);
  let newVacancyIds: number[] = [];

  if (!vacancyIds) {
    newVacancyIds.push(id);
  } else {
    newVacancyIds = JSON.parse(vacancyIds);

    const indexOfId: number = newVacancyIds.findIndex((item: number) => {
      return item === id;
    });

    if (indexOfId === -1) {
      newVacancyIds.push(id);
    } else {
      newVacancyIds.splice(indexOfId, 1);
    }
  }

  localStorage.setItem(LOCAL_STORAGE_NAMES.VACANCY_IDS, JSON.stringify(newVacancyIds));
}

export function getFavoritesIds(): number[] {
  const vacancyIds: string | null = localStorage.getItem(LOCAL_STORAGE_NAMES.VACANCY_IDS);

  if (vacancyIds) {
    return JSON.parse(vacancyIds);
  }

  return [];
}

export function isFavorite(id: number): boolean {
  const favoritesIds: number[] = getFavoritesIds();
  const isVacancyFavorite: boolean = favoritesIds.includes(id);

  return isVacancyFavorite;
}