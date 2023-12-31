import { UseQueryOptions, useQuery } from "react-query";
import { meRequest } from "./api";
import { QUERY_KEYS } from "./index.enum";
import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";

export const useMeRequest = (queryOptions: UseQueryOptions) => {
  const { setAuthUserInfo } = useContext(AppContext);
  return useQuery({
    queryKey: [QUERY_KEYS.ME],
    queryFn: meRequest,
    select: (data: any) => {
      setAuthUserInfo(data);
      return data.data;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    ...queryOptions,
  });
};
