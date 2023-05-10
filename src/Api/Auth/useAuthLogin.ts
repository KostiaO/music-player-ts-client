import { useQuery } from "react-query";
import { authLogin } from "../../Queries/Auth/authLogin";
import { TAuthUser } from "../../Types/Api/auth";

export const useAuthLogin = (
  postData: TAuthUser,
  type: "login" | "register"
) => {
  const { data, error, isLoading, isRefetching, refetch } = useQuery({
    queryKey: "authLogin",
    queryFn: () => authLogin(postData, type),
    retry: false,
    enabled: false,
  });

  return {
    loginData: data,
    loginError: error,
    loginLoading: isLoading || isRefetching,
    loginFetch: refetch,
  };
};
