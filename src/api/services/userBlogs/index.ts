import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
} from "react-query";
import { userBlogs } from "./api";
import { USER_BLOGS_QUERY_KEYS } from "./index.enum";

export const useUserBlogsList = (
  userId: any,
  queryOptions: UseInfiniteQueryOptions
) => {
  return useInfiniteQuery({
    queryKey: [USER_BLOGS_QUERY_KEYS.USERBLOGS, userId],
    queryFn: ({ pageParam }: any) => userBlogs({ pageParam, userId }),
    getNextPageParam: (lastPage: any, pages: any) => {
      return lastPage.data.pagination.next_page;
    },
    select: (data: any) => {
      return data.pages.flatMap((page: any) => page.data.blogs);
    },
    ...queryOptions,
    refetchOnWindowFocus: false,
  });
};
