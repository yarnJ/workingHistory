import UserActionType from "./user.type";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionType.GOOGLE_USER:

    return {
      currentUser: action.payload
    }

    default:
      return state;
  }
};

export default userReducer;