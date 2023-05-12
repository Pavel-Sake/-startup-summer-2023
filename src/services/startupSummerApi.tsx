import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, LOGIN, PASSWORD, CLIENT_ID, CLIENT_SECRET, SECRET_KEY } from "../constans/constans";
import { ServerResponseVacancies } from "../models/modelsVacancies";
import { ServerResponseCatalogues } from "../models/modelsCatalogues";
import {ServerResponseVacancy} from "../models/modelsVacancy";


// const accessKey = localStorage.getItem("key");

type obj = {
  page: number;
  count: number;
}

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
    getAccessToken: builder.query<ServerResponseVacancies, obj>({
      query: (obf: obj) => ({
        url: "vacancies/",
        headers: {
          Authorization: `Bearer ${"fgdf"}`, // example
        },
      }),
    }),

    getCatalogues: builder.query<ServerResponseCatalogues[], string>({
      query: (text: string) => "catalogues/",
    }),

    getVacancies: builder.query<ServerResponseVacancies, obj>({
      query: (data: obj) => `vacancies/?published=1&page=${data.page}&count=${data.count}`,
    }),

    getVacancy: builder.query<ServerResponseVacancy, string | undefined >({
      query: (vacancyId: string | undefined) => `vacancies/${vacancyId}`,
    }),

  }),
});


export const { useGetVacanciesQuery, useGetAccessTokenQuery, useGetCataloguesQuery, useGetVacancyQuery } = startupSummerApi;


