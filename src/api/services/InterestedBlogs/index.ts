import { UseQueryOptions, useQuery } from "react-query";
import { interestedBlogs } from "./api";
import { INTERESTEDBLOGS_QUERY_KEYS } from "./index.enum";

export const useInterestedBlogs: any = (queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [INTERESTEDBLOGS_QUERY_KEYS.INTERESTEDBLOGS],
    queryFn: interestedBlogs,
    select: (data: any) => {
      return data.data;
    },
    ...queryOptions,
    refetchOnWindowFocus: false,
  });
};
