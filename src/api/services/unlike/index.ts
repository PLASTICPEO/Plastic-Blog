import { useMutation } from "react-query";
import { blogUnLike } from "./api";

export const useBlogUnLike = () => {
  return useMutation({
    mutationFn: blogUnLike,
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
