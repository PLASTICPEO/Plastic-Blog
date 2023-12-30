import { useQuery, useQueryClient } from "react-query";
import { blogList } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useBlogList = () => {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QUERY_KEYS.BLOGLIST],
    queryFn: blogList,
    select: (data: any) => {
      return data;
    },
  });
};
