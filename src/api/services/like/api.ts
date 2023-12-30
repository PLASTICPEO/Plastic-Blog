import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogLike = (blogId: any) => {
  return api.put(`${ENDPOINTS.LIKE}/${blogId}`);
};
