import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogsSave = (blog: any) => {
  return api.post(ENDPOINTS.BLOGSAVE, blog);
};
