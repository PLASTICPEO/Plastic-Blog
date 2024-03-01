import { ENDPOINTS } from "./index.enum";
import api from "..";

export const isBlogLiked: any = (id: any) => {
  return api.get(`${ENDPOINTS.ISBLOGLIKED}/${id}`);
};
