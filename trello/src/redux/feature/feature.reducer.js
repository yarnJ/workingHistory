import FeatureTypeAction from "./feature.type";

const INITIAL_STATE = {
  hidden: true
};

const FeatureReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FeatureTypeAction.TOGGLE_LEARNMORE_ACTION:
      return {
        ...state,
        hidden: !state.hidden
      }

      default: 
        return state;
  }
};

export default FeatureReducer;