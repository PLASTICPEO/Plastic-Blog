import { useMutation, useQueryClient } from "react-query";
import { deleteBlog } from "./api";
import { INTERESTEDBLOGS_QUERY_KEYS } from "../InterestedBlogs/index.enum";
import { USER_BLOGS_QUERY_KEYS } from "../userBlogs/index.enum";
import { CATEGORY_QUERY_KEYS } from "../categories/index.enum";

export const useBlogDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries(
        [INTERESTEDBLOGS_QUERY_KEYS.INTERESTEDBLOGS],
        {
          refetchActive: true,
          refetchInactive: true,
        }
      );
      queryClient.refetchQueries({
        queryKey: [USER_BLOGS_QUERY_KEYS.USERBLOGS],
      });
      queryClient.refetchQueries({
        queryKey: [CATEGORY_QUERY_KEYS.TOPICS],
      });

      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
