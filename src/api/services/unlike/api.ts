import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogUnLike = (blogId: any) => {
  return api.put(`${ENDPOINTS.UNLIKE}/${blogId}`);
};
