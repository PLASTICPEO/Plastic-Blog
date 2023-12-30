import { ENDPOINTS } from "./index.enum";
import api from "..";

export const blogSingle = (blogID: any) => {
  return api.get(`${ENDPOINTS.SINGLEBLOG}/${blogID}`);
};
