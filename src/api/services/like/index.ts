import { useMutation, useQueryClient } from "react-query";
import { blogLike } from "./api";
import { ISLIKED_QUERY_KEYS } from "../isLiked/index.enum";

export const useBlogLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blogLike,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries([ISLIKED_QUERY_KEYS.ISLIKED]);
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
