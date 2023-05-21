import { EXPIRED_TOKEN_TYPES, LOCAL_STORAGE_NAMES } from "../constans/constans";
import { IRefreshToken } from "../models/modelsRefreshToken";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export function isTokenExpired(): boolean {
  const isTokenExpired: string | null = localStorage.getItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED);

  if (!isTokenExpired) {
    return false;
  }

  if (isTokenExpired === EXPIRED_TOKEN_TYPES.NOT_EXPIRED) {
    return false;
  }

  return true;
}

export function setAccessToken(data: IRefreshToken | undefined): void {
  if (data) {
    localStorage.setItem(LOCAL_STORAGE_NAMES.ACCESS_TOKEN, data.access_token);
    localStorage.setItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED, EXPIRED_TOKEN_TYPES.NOT_EXPIRED);
  }
}

type ErrorType = FetchBaseQueryError | SerializedError | undefined

export function checkAndSetIsTokenExpired(error: ErrorType): void {
  if (error) {
    localStorage.setItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED, EXPIRED_TOKEN_TYPES.EXPIRED);
  }
}