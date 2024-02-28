import { ENDPOINTS } from "./index.enum";
import api from "..";

export const deleteBlog: any = (blogID: string) => {
  return api.delete(`${ENDPOINTS.DELETEBLOG}/${blogID}`);
};
