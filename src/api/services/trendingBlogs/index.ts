import { UseQueryOptions, useQuery } from "react-query";
import { trendingBlogs } from "./api";
import { TRENDINGBLOGS_QUERY_KEYS } from "./index.enum";

export const useTrendingBlogData = (queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [TRENDINGBLOGS_QUERY_KEYS],
    queryFn: trendingBlogs,
    select: (data: any) => {
      return data.data;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    ...queryOptions,
  });
};
