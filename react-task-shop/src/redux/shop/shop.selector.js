import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionPreview = createSelector(
  [selectCollections],
  collections => collections.find((categoryId, collection) => 
    collection.id === categoryId ?
    collection
    : null
  )
);