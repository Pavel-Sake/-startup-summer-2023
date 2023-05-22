export interface IRequestParams {
  page: number;
  count: number;
  cataloguesKey: string | number,
  salaryMin: string | number,
  salaryMax: string | number,
  searchValue: string,
}

export interface IRequestParamsFromForm {
  cataloguesKey: string | number,
  salaryMin: string | number,
  salaryMax: string | number,
}