import api from "..";
import { ENDPOINTS } from "./index.enum";

export const interestedBlogs = () => {
  return api.get(`${ENDPOINTS.INTERESTEDBLOGS}`);
};
