import { ENDPOINTS } from "./index.enum";
import api from "..";

interface BlogCategoriesParams {
  pageParam: number;
  topic: string; // Explicitly define the type as string
}

export const blogCategories = ({
  pageParam = 1,
  topic,
}: BlogCategoriesParams) => {
  return api.get(
    `${ENDPOINTS.TOPICS}/${topic}?page=${pageParam}&blogsPerPage=3`
  );
};
