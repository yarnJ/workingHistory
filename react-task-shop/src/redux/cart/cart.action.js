import CartTypeAction from "./cart.type";

export const toggleCartHidden = () => ({ 
  type: CartTypeAction.TOGGLE_TYPE_ACTION  
 });

 export const addItemToCart = item => ({
   type: CartTypeAction.ADD_ITEM,
   payload: item
 });

 export const increaseItemToCart = item => ({
   type: CartTypeAction.INCREASE_ITEM,
   payload: item
 });

 export const decreaseItemToCart = item => ({
   type: CartTypeAction.DECREASE_ITEM,
   payload: item
 });

 export const removeItemToCart = item => ({
   type: CartTypeAction.REMOVE_ITEM,
   payload: item
 });