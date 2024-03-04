import { ENDPOINTS } from "./index.enum";
import api from "..";

export const trendingBlogs = () => {
  return api.get(`${ENDPOINTS.TRENDINGBLOGS}`);
};
