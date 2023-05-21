import { ACCESS_TOKEN, IS_TOKEN_EXPIRED } from "../constans/localStorageName";
import { IRefreshToken } from "../models/modelsRefreshToken";

function setAccessTokenToLocal(data: IRefreshToken | undefined): void {
  
  if (data) {
    localStorage.setItem(ACCESS_TOKEN, data.access_token);
    localStorage.setItem(IS_TOKEN_EXPIRED, "1");
  }
}

export { setAccessTokenToLocal };