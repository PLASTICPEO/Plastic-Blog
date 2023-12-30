import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogUpdate = (blog: any) => {
  return api.put(ENDPOINTS.BLOGUPDATE, blog);
};
