import { IS_TOKEN_EXPIRED } from "../constans/localStorageName";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type ErrorType = FetchBaseQueryError | SerializedError | undefined

function setAndCheckTokenIsExpired(error: ErrorType): void {
  if (error) {
    localStorage.setItem(IS_TOKEN_EXPIRED, "0");
  }
}


export { setAndCheckTokenIsExpired };