import CustomerType from "./customer.type";

const INITIAL_STATE = {
  num: 1,
  length: 3
}

export const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CustomerType.NEXT_CAROUSEL:
    return {
      ...state,
      num: state.num === 4 ? 1 : state.num + 1
      
    }

    case CustomerType.PREV_CAROUSEL:
      return {
        ...state,
        num: state.num === 1 ? 4 : state.num - 1
      }

      default :
      return state;
  }
};