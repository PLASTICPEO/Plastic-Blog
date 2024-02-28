import { UseQueryOptions, useQuery } from "react-query";
import { bloggerInfo } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useBloggerInformation = (
  bloggerID: any,
  queryOptions: UseQueryOptions
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BLOGGER, bloggerID],
    queryFn: () => bloggerInfo(bloggerID),
    select: (data: any) => {
      return data.data;
    },
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
};
