import SolutionTypeAction from "./solution.type";

const INITIAL_STATE = {
  hidden: true,
  hiddenId: ''
};

export const SolutionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SolutionTypeAction.TOGGLE_SOLUTION_ACTION:
      return{
        ...state,
        hidden: !state.hidden,
        hiddenId: action.payload
      };

      default:
        return state;
  }
};