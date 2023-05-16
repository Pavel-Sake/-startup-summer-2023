import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, LOGIN, PASSWORD, CLIENT_ID, CLIENT_SECRET, SECRET_KEY } from "../constans/constans";
import { ServerResponseVacancies } from "../models/modelsVacancies";
import { ServerResponseCatalogues } from "../models/modelsCatalogues";
import { ServerResponseVacancy } from "../models/modelsVacancy";
import {IRequestParams} from "../models/modelsRequestParams";


// const accessKey = localStorage.getItem("key");

// type requestParamsType = {
//   page: number;
//   count: number;
//   cataloguesKey: string | number,
//   salaryMin: string | number,
//   salaryMax: string | number,
//   searchWords: string,
// }

export const startupSummerApi = createApi({
  reducerPath: "startupSummerApi",
  baseQuery: fetchBaseQuery(
    { baseUrl: BASE_URL, headers: {
      "Content-Type": "application/json",
      "X-Api-App-Id": CLIENT_SECRET,
      // "Authorization": `Bearer ${""}`,
      "x-secret-key": SECRET_KEY,
    }, }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<ServerResponseVacancies, string>({
      query: (obf: string) => ({
        url: "vacancies/",
        headers: {
          Authorization: `Bearer ${"fgdf"}`, // example
        },
      }),
    }),

    getCatalogues: builder.query<ServerResponseCatalogues[], string>({
      query: (text: string) => "catalogues/",
    }),

    // getVacancies: builder.query<ServerResponseVacancies, obj>({
    //   query: (data: obj) => `vacancies/?published=1&page=${data.page}&count=${data.count}&payment_from=10000&payment_to=30000&no_agreement=1`,
    // }),

    getVacancies: builder.query<ServerResponseVacancies, IRequestParams>({
      query: (data: IRequestParams) => ({
        url: "vacancies/?published=1",
        params: {
          page: `${data.page}`,
          count: `${data.count}`,
          payment_from: `${data.salaryMin}`,
          payment_to: `${data.salaryMax}`,
          no_agreement: "1",
          keyword: data.searchWords,
          catalogues: `${data.cataloguesKey}`,
        }
      }),
    }),
    // getVacancies: builder.query<ServerResponseVacancies, requestParamsType>({
    //   query: (data: requestParamsType) => ({
    //     url: "vacancies/?published=1",
    //     params: {
    //       page: "1",
    //       count: 4,
    //       payment_from: "10000",
    //       payment_to: "50000",
    //       no_agreement: "1",
    //       keyword: "",
    //       catalogues: "33"
    //     }
    //   }),
    // }),

    getVacancy: builder.query<ServerResponseVacancy, string | undefined >({
      query: (vacancyId: string | undefined) => `vacancies/${vacancyId}`,
    }),

    getVacanciesById: builder.query<ServerResponseVacancies, string>({
      query: (ids: string) => `vacancies/?${ids}`,
    }),

  }),
});


export const {
  useGetVacanciesQuery, useGetAccessTokenQuery,
  useGetCataloguesQuery, useGetVacancyQuery,
  useGetVacanciesByIdQuery
} = startupSummerApi;


