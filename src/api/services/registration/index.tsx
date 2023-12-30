import { useMutation } from "react-query";
import { userCreate } from "./api";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: userCreate,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error: any) => {
      return error.response.data;
    },
  });
};
