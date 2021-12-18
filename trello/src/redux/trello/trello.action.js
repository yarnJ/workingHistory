import trelloActionType from "./trello.type";

export const searchTrello = search_key => ({
  type: trelloActionType.SEARCH_TRELLO,
  payload: search_key
});