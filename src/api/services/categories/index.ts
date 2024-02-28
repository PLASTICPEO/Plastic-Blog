import { UseQueryOptions, useInfiniteQuery } from "react-query";
import { blogCategories } from "./api";
import { CATEGORY_QUERY_KEYS } from "./index.enum";
import { UseInfiniteQueryOptions, InfiniteData } from "react-query";

export const useBlogCategory = (
  topic: any,
  queryOptions: UseInfiniteQueryOptions
) => {
  return useInfiniteQuery({
    queryKey: [CATEGORY_QUERY_KEYS.TOPICS, topic],
    queryFn: ({ pageParam }) => blogCategories({ pageParam, topic }),
    getNextPageParam: (lastPage: any, pages) => {
      return lastPage.data.pagination.next_page;
    },
    select: (data: InfiniteData<any>) => {
      return {
        ...data,
        pages: data.pages.flatMap((page) => page.data.blogs),
        info: {
          pagesInfo: data.pages,
        },
      };
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    ...queryOptions,
  });
};
