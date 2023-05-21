import { IS_TOKEN_EXPIRED } from "../constans/localStorageName";

function setAndCheckTokenIsExpired(error: any): void {

  if (error) {
    localStorage.setItem(IS_TOKEN_EXPIRED, "0");
  }
}

export { setAndCheckTokenIsExpired };