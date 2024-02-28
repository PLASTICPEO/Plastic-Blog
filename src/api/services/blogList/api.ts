import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogList: any = ({ pageParam = 1 }) => {
  return api.get(`${ENDPOINTS.BLOGLIST}?page=${pageParam}&blogsPerPage=3`);
};
