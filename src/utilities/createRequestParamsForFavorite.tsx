type FavoriteParams = {
  stringForRequest: string;
  page: number;
  count: number;
};

export function createRequestParamsForFavorite(favoritesIds: number[], pageNumber: number): FavoriteParams {
  let stringForRequest = "";

  favoritesIds.forEach((id: number) => {
    stringForRequest += `&ids[]=${id}`;
  });


  const params = {
    stringForRequest: stringForRequest,
    page: pageNumber,
    count: 4
  };

  return params;
}
