import { useMutation, useQueryClient } from "react-query";
import { blogsSave } from "./api";
import { QUERY_KEYS } from "../blogList/index.enum";
import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";

export const useBlogSave = () => {
  const { setNewBlogObject } = useContext(AppContext);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blogsSave,
    onSuccess: (data: any) => {
      setNewBlogObject(null);
      queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.BLOGLIST],
      });
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
