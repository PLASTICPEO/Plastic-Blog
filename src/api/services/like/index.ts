import { useMutation } from "react-query";
import { blogLike } from "./api";

export const useBlogLike = () => {
  return useMutation({
    mutationFn: blogLike,
    onSuccess: (data: any) => {
      console.log(data);
      return data;
    },
    onError: (error: any) => {
      console.log(error);
      return error;
    },
  });
};
