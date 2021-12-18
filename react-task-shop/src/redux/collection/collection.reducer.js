// import SHOP_DATA from "../../page/shop/shopData";
import collectionActionType from "./collection.type";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: undefined
};

export const CollectionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case collectionActionType.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFetching: true
      }

    case collectionActionType.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching: false,
        collections: action.payload
      }

    case collectionActionType.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }

    case collectionActionType.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload
      }

    default: 
      return state;
  }
};

export default CollectionReducer;