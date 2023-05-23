import { IRequestParams, IRequestParamsFromForm } from "../models/modelsRequestParams";
import { VACANCY_NUMBER_ON_PAGE } from "../constans/constans";

type FavoriteParams = {
  stringForRequest: string;
  page: number;
  count: number;
};
export function createRequestParamsForVacancies(dataFromForm: IRequestParamsFromForm, searchValue: string, pageNumber: number): IRequestParams {
  const requestParams: IRequestParams = {
    page: pageNumber,
    count: VACANCY_NUMBER_ON_PAGE,
    cataloguesKey: dataFromForm.cataloguesKey || "",
    salaryMin: dataFromForm.salaryMin || "",
    salaryMax: dataFromForm.salaryMax || "",
    searchValue: searchValue || "",
  };

  return requestParams;
}

export function createRequestParamsForFavoriteVacancies(favoritesIds: number[], pageNumber: number): FavoriteParams {
  let stringForRequest = "";

  favoritesIds.forEach((id: number) => {
    stringForRequest += `&ids[]=${id}`;
  });

  const params = {
    stringForRequest: stringForRequest,
    page: pageNumber,
    count: VACANCY_NUMBER_ON_PAGE,
  };

  return params;
}
