import api from "..";
import { ENDPOINTS } from "./index.enum";

interface UserBlogsParams {
  pageParam: number;
  userId: string;
}

export const userBlogs = ({ pageParam = 1, userId }: UserBlogsParams) => {
  console.log(pageParam, "user blogs");
  return api.get(
    `${ENDPOINTS.USERBLOGS}/${userId}?page=${pageParam}&blogsPerPage=3`
  );
};
