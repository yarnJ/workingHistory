import HeaderActionType from "./header.type";

const INITIAL_STATE =  {
  responseNavHidden: true
};

export const HeaderReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HeaderActionType.TOGGLE_RESPONSE_NAV:
      return {
        ...state,
        responseNavHidden: !state.responseNavHidden
      }

      default: 
      return state;
  }
};

export default HeaderReducer;