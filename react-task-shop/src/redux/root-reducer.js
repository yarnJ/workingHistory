import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import CartReducer from "./cart/cart.reducer";
import CollectionReducer from "./collection/collection.reducer";
import ShopReducer from "./shop/shop.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  collections: CollectionReducer,
  shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer);