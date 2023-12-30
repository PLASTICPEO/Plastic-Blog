import axios from "axios";
import { ENDPOINTS } from "./index.enum";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const userCreate = (user: any) => {
  return axios.post(`${baseUrl}${ENDPOINTS.CREATE}`, user);
};
