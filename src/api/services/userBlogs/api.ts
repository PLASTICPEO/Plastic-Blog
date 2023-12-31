import api from "..";
import { ENDPOINTS } from "./index.enum";

export const userBlogs = () => {
  return api.get(`${ENDPOINTS.USERBLOGS}`);
};
