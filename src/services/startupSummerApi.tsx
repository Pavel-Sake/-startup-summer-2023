import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, LOGIN, PASSWORD, CLIENT_ID, CLIENT_SECRET, SECRET_KEY } from "../constans/constans";
import { ServerResponseVacancies } from "../models/modelsVacancies";
import { ServerResponseCatalogues } from "../models/modelsCatalogues";
import { ServerResponseVacancy } from "../models/modelsVacancy";
import { IRequestParams } from "../models/modelsRequestParams";
import { IRequestParamsFavorite } from "../models/modelsRequestParamsFavorite";
import { IRefreshToken } from "../models/modelsRefreshToken";

import { ACCESS_TOKEN } from "../constans/localStorageName";


let tokken = "1v3.r.137440105.8a697d870a500d95c3a841e24ecb40d89ddaf2a1.9f264fb26875ffa2d9cd243be9463d8c7b3a62e4";

const refresh = "v3.r.137440105.9989a98e933a07552d641c03c5607809df00c487.65aed10cdf547d1397fd41fc671dca355ddd57d8";

const accessToken = localStorage.getItem(ACCESS_TOKEN);

if (accessToken) {
  tokken = accessToken;
}


export const startupSummerApi = createApi({
  reducerPath: "startupSummerApi",
  baseQuery: fetchBaseQuery(
    { baseUrl: BASE_URL
    //   headers: {
    //   "Content-Type": "application/json",
    //   "X-Api-App-Id": CLIENT_SECRET,
    //    "Authorization": `Bearer ${accessToken}`,
    //   "x-secret-key": SECRET_KEY,
    // },
    }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<any, string>({
      query: (obf: string) => ({
        url: "oauth2/password/?",
        params: {
          login: LOGIN,
          password: PASSWORD,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": SECRET_KEY,
        },
      }),
    }),

    getAccessTokenRefresh: builder.query<IRefreshToken, string>({
      query: (obf: string) => ({
        url: "oauth2/refresh_token/?",
        params: {
          refresh_token: refresh,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": SECRET_KEY,
        },
      }),
    }),

    getCatalogues: builder.query<ServerResponseCatalogues[], string>({
      query: (text: string) => ({
        url: "catalogues/",
        headers: {
          Authorization: `Bearer ${tokken}`, // example
          "Content-Type": "application/json",
          "X-Api-App-Id": CLIENT_SECRET,
          "x-secret-key": SECRET_KEY,
        },
      }),
    }),

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
        },
        headers: {
          Authorization: `Bearer ${tokken}`, // example
          "Content-Type": "application/json",
          "X-Api-App-Id": CLIENT_SECRET,
          "x-secret-key": SECRET_KEY,
        },
      }),
    }),

    getVacancy: builder.query<ServerResponseVacancy, string | undefined >({
      query: (vacancyId: string | undefined) => ({
        url: `vacancies/${vacancyId}`,
        headers: {
          Authorization: `Bearer ${tokken}`, // example
          "Content-Type": "application/json",
          "X-Api-App-Id": CLIENT_SECRET,
          "x-secret-key": SECRET_KEY,
        },
      }),
    }),

    getVacanciesById: builder.query<ServerResponseVacancies, IRequestParamsFavorite>({
      query: (data: IRequestParamsFavorite) => ({
        url: `vacancies/?published=1&${data.stringForRequest}&count=4`,
        params: {
          page: `${data.page}`,
          count: `${data.count}`,
        },
        headers: {
          Authorization: `Bearer ${tokken}`,
          "Content-Type": "application/json",
          "X-Api-App-Id": CLIENT_SECRET,
          "x-secret-key": SECRET_KEY,
        },
      }),
    }),

  }),
});


export const {
  useGetVacanciesQuery, useGetAccessTokenQuery,
  useGetCataloguesQuery, useGetVacancyQuery,
  useGetVacanciesByIdQuery, useGetAccessTokenRefreshQuery
} = startupSummerApi;


