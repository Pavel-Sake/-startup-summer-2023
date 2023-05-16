import { IRequestParams, IRequestParamsFromForm } from "../models/modelsRequestParams";

function getRequestParams(dataFromForm: IRequestParamsFromForm, searchWords: string) {

  const requestParams: IRequestParams = {
    page: 4,
    count: 4,
    cataloguesKey: "",
    salaryMin: "",
    salaryMax: "",
    searchWords: ""
  };

  requestParams.cataloguesKey = dataFromForm.cataloguesKey;
  requestParams.salaryMin = dataFromForm.salaryMin;
  requestParams.salaryMax = dataFromForm.salaryMax;
  requestParams.searchWords = searchWords;
  
  return requestParams;
}


export { getRequestParams };