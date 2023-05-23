import {
  getRefreshToken,
  isTokenExpired,
  setAccessToken,
  setRefreshToken,
} from "../utilities/tokens";
import {
  useLoginQuery,
  useGetAccessTokenRefreshQuery,
} from "../services/startupSummerApi";

export function useAuth(): boolean {
  const refreshToken = getRefreshToken();

  const loginData = useLoginQuery("", {
    skip: !!refreshToken,
  });

  if (loginData.data){
    setRefreshToken(loginData.data.refresh_token);
    setAccessToken(loginData.data.access_token);
  }


  const isTokenExpiredValue = isTokenExpired();

  const refreshData = useGetAccessTokenRefreshQuery("", {
    skip: !isTokenExpiredValue && loginData.isLoading
  });

  if (refreshData.data) {
    setAccessToken(refreshData.data.access_token);
  }

  const isLoading = loginData.isLoading || refreshData.isLoading;

  return isLoading;
}
