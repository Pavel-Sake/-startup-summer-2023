function isFavorite(favoriteIds: number[], id: number) {

  const isVacancyFavorite: boolean = favoriteIds.includes(id);
  
  return isVacancyFavorite;
}


export { isFavorite };