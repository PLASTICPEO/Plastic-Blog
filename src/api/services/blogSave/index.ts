import { useMutation, useQueryClient } from "react-query";
import { blogsSave } from "./api";
import { QUERY_KEYS } from "../blogList/index.enum";
import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";
import { CATEGORY_QUERY_KEYS } from "../categories/index.enum";

export const useBlogSave = () => {
  const { setNewBlogObject } = useContext(AppContext);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blogsSave,
    onSuccess: (data: any) => {
      queryClient.refetchQueries({
        queryKey: [CATEGORY_QUERY_KEYS.TOPICS],
      });
      setNewBlogObject(null);
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
