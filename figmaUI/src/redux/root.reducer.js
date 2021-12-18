import { combineReducers } from "redux";
import { SolutionReducer } from "./solution/solution.reducer";
import { HeaderReducer } from "./header/header.reducer";

export default combineReducers({
  solution: SolutionReducer,
  header: HeaderReducer
});