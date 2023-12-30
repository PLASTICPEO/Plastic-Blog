import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogCategories = (topic: any) => {
  return api.get(`${ENDPOINTS.TOPICS}/${topic}`);
};
