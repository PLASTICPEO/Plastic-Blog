import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query";
import { userBlogs } from "./api";
import { USER_BLOGS_QUERY_KEYS } from "./index.enum";

export const useUserBlogsList = (
  userId: any,
  queryOptions: UseInfiniteQueryOptions
) => {
  const uniqueBlogIds = new Set();
  return useInfiniteQuery({
    queryKey: [USER_BLOGS_QUERY_KEYS.USERBLOGS, userId],
    queryFn: ({ pageParam }: any) => userBlogs({ pageParam, userId }),
    getNextPageParam: (lastPage: any) => {
      return lastPage.data.pagination.next_page;
    },
    select: (data: any) => {
      const blogs = data.pages.flatMap((page: any) => page.data.blogs);

      // Filter out duplicate blogs based on unique IDs
      const filteredBlogs = blogs.filter((item: any) => {
        if (!uniqueBlogIds.has(item._id)) {
          uniqueBlogIds.add(item._id);
          return true;
        }
        return false;
      });

      return filteredBlogs;
    },
    ...queryOptions,
    refetchOnWindowFocus: false,
  });
};
