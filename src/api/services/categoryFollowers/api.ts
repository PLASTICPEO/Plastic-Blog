import api from "..";
import { ENDPOINTS } from "./index.enum";

export const categoryFollowersCount = (topic: any) => {
  return api.get(`${ENDPOINTS.CATEGORYFOLLOWERS}/${topic}`);
};
