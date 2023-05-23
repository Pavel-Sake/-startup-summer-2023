import { EXPIRED_TOKEN_TYPES, LOCAL_STORAGE_NAMES } from "../constans/constans";
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

export function setAccessToken(token: string): void {
  localStorage.setItem(LOCAL_STORAGE_NAMES.ACCESS_TOKEN, token);
  localStorage.setItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED, EXPIRED_TOKEN_TYPES.NOT_EXPIRED);
  
}
export function getAccessToken(): string | null {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_NAMES.ACCESS_TOKEN);

  return accessToken;
}

type ErrorType = FetchBaseQueryError | SerializedError | undefined

export function checkAndSetIsTokenExpired(error: ErrorType): void {
  if (error) {
    localStorage.setItem(LOCAL_STORAGE_NAMES.IS_TOKEN_EXPIRED, EXPIRED_TOKEN_TYPES.EXPIRED);
  }
}

export function setRefreshToken(token: string): void {
  localStorage.setItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN, token);
}

export function getRefreshToken(): string | null {
  const refreshToken = localStorage.getItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN);

  return refreshToken;
}

