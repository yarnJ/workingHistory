import CartTypeAction from "./cart.type";
import { addItemCount, increaseItem, decreaseItem } from "./cart.utilies";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartTypeAction.TOGGLE_TYPE_ACTION:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartTypeAction.ADD_ITEM:
        return {
          ...state,
          // cartItems: [ ...state.cartItems, action.payload ],
          cartItems: addItemCount(state.cartItems, action.payload),
          cartItems1: action.payload
        };

    case CartTypeAction.INCREASE_ITEM:
      return{
        ...state,
        cartItems: increaseItem(state.cartItems, action.payload)
      }

    case CartTypeAction.DECREASE_ITEM:
      return{
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload)
      }

    case CartTypeAction.REMOVE_ITEM:
      return{
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id && cartItem.name !== action.payload.name)
      }

      default: 
        return state;
  }
};

export default CartReducer;