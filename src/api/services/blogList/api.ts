import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogList = () => {
  return api.get(`${ENDPOINTS.BLOGLIST}`);
};
