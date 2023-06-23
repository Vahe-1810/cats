import { CATEGORIES_URL, CAT_IMAGES_URL } from "../constants/common";

type TypeParams = {
  page: number;
  categoryId: string;
};

export const fetchCategories = async () => {
  try {
    const resp = await fetch(CATEGORIES_URL);
    return await resp.json();
  } catch (err) {
    console.log(err);
  }
};

export const fetchCatImages = async ({ page, categoryId }: TypeParams) => {
  try {
    const resp = await fetch(
      `${CAT_IMAGES_URL}/search?limit=10&page=${page}${
        categoryId ? `&category_ids=${categoryId}` : ""
      }`
    );
    return await resp.json();
  } catch (err) {
    console.log(err);
  }
};
