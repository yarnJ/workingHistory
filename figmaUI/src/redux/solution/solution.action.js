import SolutionTypeAction from "./solution.type";

export const toggleSolution = hiddenId => ({
  type: SolutionTypeAction.TOGGLE_SOLUTION_ACTION,
  payload: hiddenId
});