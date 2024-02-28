import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query";
import { blogList } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useBlogList = (queryOptions: UseInfiniteQueryOptions) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.BLOGLIST],
    queryFn: ({ pageParam }) => blogList({ pageParam }),
    getNextPageParam: (lastPage: any) => {
      return lastPage.data.pagination.next_page;
    },
    select: (data: any) => {
      return data.pages.flatMap((page: any) => page.data.blogs);
    },
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
};
