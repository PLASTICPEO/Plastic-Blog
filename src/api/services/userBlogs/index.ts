import { useQuery, useQueryClient } from "react-query";
import { userBlogs } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useUserBlogsList = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERBLOGS],
    queryFn: userBlogs,
    select: (data: any) => {
      return data.data;
    },
    staleTime: Infinity,
  });
};
