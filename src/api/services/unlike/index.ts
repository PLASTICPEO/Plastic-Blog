import { useMutation, useQueryClient } from "react-query";
import { blogUnLike } from "./api";
import { ISLIKED_QUERY_KEYS } from "../isLiked/index.enum";

export const useBlogUnLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blogUnLike,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries([ISLIKED_QUERY_KEYS.ISLIKED]);
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
