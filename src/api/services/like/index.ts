import { useMutation } from "react-query";
import { blogLike } from "./api";

export const useBlogLike = () => {
  return useMutation({
    mutationFn: blogLike,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
