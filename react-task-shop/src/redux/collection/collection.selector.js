import { createSelector } from "reselect";

const selectCollection = state => state.collections;

export const selectCollections = createSelector (
  [selectCollection],
  collection => collection.collections
);

export const selectCollectionsForPreview = createSelector (
  [selectCollection],
  collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : null
);

export const selectisCollectionFetching = createSelector (
  [selectCollection],
  collections => collections.isFetching
);

