import { ENDPOINTS } from "./index.enum";
import api from "..";

export const meRequest = () => {
  return api.get(`${ENDPOINTS.ME}`);
};
