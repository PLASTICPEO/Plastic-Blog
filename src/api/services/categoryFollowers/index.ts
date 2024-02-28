import { UseQueryOptions, useQuery } from "react-query";
import { categoryFollowersCount } from "./api";
import { FOLLOWERS_QUERY_KEYS } from "./index.enum";

export const useCategoryFollowersCount = (
  topic: any,
  queryOptions: UseQueryOptions
) => {
  return useQuery({
    queryKey: [FOLLOWERS_QUERY_KEYS.CATEGORYFOLLOWERS, topic],
    queryFn: () => categoryFollowersCount(topic),
    select: (data: any) => {
      return data.data;
    },
    refetchOnWindowFocus: true,
    staleTime: Infinity,
    ...queryOptions,
  });
};
