import { useInfiniteQuery } from "react-query";
import { interestedBlogs } from "./api";
import { INTERESTEDBLOGS_QUERY_KEYS } from "./index.enum";

import { UseInfiniteQueryOptions } from "react-query";

export const useInterestedBlogs = (queryOptions: UseInfiniteQueryOptions) => {
  const uniqueBlogIds = new Set();
  return useInfiniteQuery({
    queryKey: [INTERESTEDBLOGS_QUERY_KEYS.INTERESTEDBLOGS],
    queryFn: ({ pageParam }) => interestedBlogs({ pageParam }),
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
