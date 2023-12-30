import { setAuthorizationHeader } from "..";
import { useMutation, useQueryClient } from "react-query";
import { login } from "./api";
import { AUTH_TOKEN } from "../../constants/constants";
import { QUERY_KEYS } from "../me/index.enum";
import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      localStorage.setItem(AUTH_TOKEN, data?.data?.accessToken);
      setAuthorizationHeader(data?.data?.accessToken);

      queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.ME],
      });
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};
