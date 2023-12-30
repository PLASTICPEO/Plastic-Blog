import { ENDPOINTS } from "./index.enum";
import api from "..";

export const login = (auth: any) => {
  return api.post(`${ENDPOINTS.AUTH}`, auth);
};
