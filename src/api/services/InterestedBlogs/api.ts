import api from "..";
import { ENDPOINTS } from "./index.enum";

export const interestedBlogs = ({ pageParam = 1 }) => {
  return api.get(
    `${ENDPOINTS.INTERESTEDBLOGS}?page=${pageParam}&blogsPerPage=3`
  );
};
