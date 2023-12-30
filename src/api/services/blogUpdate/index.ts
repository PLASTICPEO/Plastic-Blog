import { useMutation } from "react-query";
import { blogUpdate } from "./api";

export const useBlogUpdate = () => {
  return useMutation({
    mutationFn: blogUpdate,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
