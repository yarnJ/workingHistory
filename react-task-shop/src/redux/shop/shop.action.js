import ShopTypeAction from "./shop.type";

export const previewCategory = categoryId => ({
  type: ShopTypeAction.OVERVIEW_COLLECTION_CATEGORY,
  payload: categoryId
});