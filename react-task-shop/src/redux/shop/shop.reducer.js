import SHOP_DATA from "../../page/shop/shopData";
import ShopTypeAction from "./shop.type";
import { filterCollectionCategory } from "./shop.utilies";

const INITIAL_STATE = {
  shop: SHOP_DATA
};

const ShopReducer = (state = INITIAL_STATE, action) => {

  switch(action.type){
    case ShopTypeAction.OVERVIEW_COLLECTION_CATEGORY :
      return{
        ...state,
        collection: filterCollectionCategory(state.shop, action.payload)
      }
    
    default:
      return state;
  }

};

export default ShopReducer;