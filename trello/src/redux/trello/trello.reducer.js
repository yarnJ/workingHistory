import trelloActionType from "./trello.type";

const INITIAL_STATE = {
  search_key: ""
};

export const trelloReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case trelloActionType.SEARCH_TRELLO:
      return{
        search_key: action.payload
      }
      default: 
      return state;
  }
}

