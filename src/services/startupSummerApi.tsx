import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ServerResponseVacancies } from "../models/modelsVacancy";
import { ServerResponseCatalogues } from "../models/modelsCatalogues";
import { ServerResponseVacancy } from "../models/modelsVacancy";
import { IRequestParams } from "../models/modelsRequestParams";
import { IRequestParamsFavorite } from "../models/modelsRequestParamsFavorite";
import { IRefreshToken } from "../models/modelsRefreshToken";

import { SECRETS } from "../constans/constans";
import { getAccessToken, getRefreshToken } from "../utilities/tokens";

const headersWithoutAuth = {
  "Content-Type": "application/json",
  "x-secret-key": SECRETS.SECRET_KEY,
};

const headersWithAuth = {
  "Content-Type": "application/json",
  "X-Api-App-Id": SECRETS.CLIENT_SECRET,
  "x-secret-key": SECRETS.SECRET_KEY,
};

export const startupSummerApi = createApi({
  reducerPath: "startupSummerApi",
  baseQuery: fetchBaseQuery({ baseUrl: SECRETS.BASE_URL }),
  endpoints: (builder) => ({
    login: builder.query<any, string>({
      query: (value: any) => ({
        url: "oauth2/password/?",
        params: {
          login: SECRETS.LOGIN,
          password: SECRETS.PASSWORD,
          client_id: SECRETS.CLIENT_ID,
          client_secret: SECRETS.CLIENT_SECRET,
        },
        headers: headersWithoutAuth,
      }),
    }),

    getAccessTokenRefresh: builder.query<IRefreshToken, string>({
      query: (value: any) => ({
        url: "oauth2/refresh_token/?",
        params: {
          refresh_token: getRefreshToken(),
          client_id: SECRETS.CLIENT_ID,
          client_secret: SECRETS.CLIENT_SECRET,
        },
        headers: headersWithoutAuth,
      }),
    }),

    getCatalogues: builder.query<ServerResponseCatalogues[], string>({
      query: (value: any) => ({
        url: "catalogues/",
        headers: {
          ...headersWithAuth,
          Authorization: `Bearer ${getAccessToken()}`,
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
          keyword: data.searchValue,
          catalogues: `${data.cataloguesKey}`,
        },
        headers: {
          ...headersWithAuth,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }),
    }),

    getVacancy: builder.query<ServerResponseVacancy, string | undefined >({
      query: (vacancyId: string | undefined) => ({
        url: `vacancies/${vacancyId}`,
        headers: {
          ...headersWithAuth,
          Authorization: `Bearer ${getAccessToken()}`,
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
          ...headersWithAuth,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }),
    }),

  }),
});


export const {
  useGetVacanciesQuery,
  useGetCataloguesQuery,
  useGetVacancyQuery,
  useGetVacanciesByIdQuery,
  useGetAccessTokenRefreshQuery,
  useLoginQuery,
} = startupSummerApi;


