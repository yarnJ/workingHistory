import { combineReducers } from 'redux';
import FeatureReducer from './feature/feature.reducer';
import { CustomerReducer } from './customer/customer.reducer';
import { trelloReducer } from './trello/trello.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  feature: FeatureReducer,
  custom: CustomerReducer,
  user: userReducer,
  trello: trelloReducer
});