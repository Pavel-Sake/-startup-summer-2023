import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ServerResponseVacancies } from "../models/modelsVacancy";
import { ServerResponseCatalogues } from "../models/modelsCatalogues";
import { ServerResponseVacancy } from "../models/modelsVacancy";
import { IRequestParams } from "../models/modelsRequestParams";
import { IRequestParamsFavorite } from "../models/modelsRequestParamsFavorite";
import { IRefreshToken } from "../models/modelsRefreshToken";

import { SECRETS } from "../constans/constans";
import { getAccessToken } from "../utilities/accessToken";

const refresh = "v3.r.137440105.9989a98e933a07552d641c03c5607809df00c487.65aed10cdf547d1397fd41fc671dca355ddd57d8";

const headersWithoutAuth = {
  "Content-Type": "application/json",
  "x-secret-key": SECRETS.SECRET_KEY,
};

const headersWithAuth = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
  "X-Api-App-Id": SECRETS.CLIENT_SECRET,
  "x-secret-key": SECRETS.SECRET_KEY,
};


export const startupSummerApi = createApi({
  reducerPath: "startupSummerApi",
  baseQuery: fetchBaseQuery({ baseUrl: SECRETS.BASE_URL }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<any, string>({
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
          refresh_token: refresh,
          client_id: SECRETS.CLIENT_ID,
          client_secret: SECRETS.CLIENT_SECRET,
        },
        headers: headersWithoutAuth,
      }),
    }),

    getCatalogues: builder.query<ServerResponseCatalogues[], string>({
      query: (value: any) => ({
        url: "catalogues/",
        headers: headersWithAuth,
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
        headers: headersWithAuth,
      }),
    }),

    getVacancy: builder.query<ServerResponseVacancy, string | undefined >({
      query: (vacancyId: string | undefined) => ({
        url: `vacancies/${vacancyId}`,
        headers: headersWithAuth,
      }),
    }),

    getVacanciesById: builder.query<ServerResponseVacancies, IRequestParamsFavorite>({
      query: (data: IRequestParamsFavorite) => ({
        url: `vacancies/?published=1&${data.stringForRequest}&count=4`,
        params: {
          page: `${data.page}`,
          count: `${data.count}`,
        },
        headers: headersWithAuth,
      }),
    }),

  }),
});


export const {
  useGetVacanciesQuery,
  useGetCataloguesQuery,
  useGetVacancyQuery,
  useGetVacanciesByIdQuery,
  useGetAccessTokenRefreshQuery
} = startupSummerApi;


