import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, LOGIN, PASSWORD, CLIENT_ID, CLIENT_SECRET, SECRET_KEY } from "../constans/constans";


const accessKey = localStorage.getItem("key");

console.log("accessKey", accessKey);
export const startupSummerApi = createApi({
  reducerPath: "startupSummerApi",
  baseQuery: fetchBaseQuery(
    { baseUrl: BASE_URL, headers: {
      "Content-Type": "application/json",
      "X-Api-App-Id": CLIENT_SECRET,
      "Authorization": `Bearer ${accessKey}`,
      "x-secret-key": SECRET_KEY,
    }, }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (number) => `vacancies/?t=4&page=${number}&count=4`,
    }),
  }),
});


export const { useGetVacanciesQuery } = startupSummerApi;


