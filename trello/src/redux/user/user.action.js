import UserActionType from "./user.type";

export const setCurrentUser = user => ({
  type: UserActionType.GOOGLE_USER,
  payload: user
});