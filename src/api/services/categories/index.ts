import { UseQueryOptions, useQuery } from "react-query";
import { blogCategories } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useBlogCategory = (topic: any, queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TOPICS, topic],
    queryFn: () => blogCategories(topic),
    select: (data: any) => {
      return data.data;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    ...queryOptions,
  });
};
