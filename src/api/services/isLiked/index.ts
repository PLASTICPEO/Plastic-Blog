import { UseQueryOptions, useQuery } from "react-query";
import { isBlogLiked } from "./api";
import { ISLIKED_QUERY_KEYS } from "./index.enum";

export const useIsLiked = (id: any, queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [ISLIKED_QUERY_KEYS.ISLIKED, id],
    queryFn: () => isBlogLiked(id),
    select: (data: any) => {
      return data.data.isLiked;
    },
    ...queryOptions,
  });
};
