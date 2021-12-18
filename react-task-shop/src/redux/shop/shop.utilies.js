export const filterCollectionCategory = (shop, categoryId) => {
  const existingCollection = shop.find(collection => 
      collection.id === categoryId
    );
  
    if(existingCollection) {
      return shop.filter(collection => 
        collection.id === categoryId ?
        collection
        : null
      );
    }
};

export const selectCollectionsForPreview = (collections) => {
  return Object.keys(collections).map(key => collections[key]);
}