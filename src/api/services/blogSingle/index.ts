import { UseQueryOptions, useQuery } from "react-query";
import { blogSingle } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useBlogSingle = (blogID: any, queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SINGLEBLOG, blogID],
    queryFn: () => blogSingle(blogID),
    select: (data: any) => {
      return data.data;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    ...queryOptions,
  });
};
