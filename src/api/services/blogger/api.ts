import { ENDPOINTS } from "./index.enum";
import api from "..";

export const bloggerInfo = (bloggerID: any) => {
  return api.get(`${ENDPOINTS.BLOGGER}/${bloggerID}`);
};
