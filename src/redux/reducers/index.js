import { combineReducers } from 'redux';
import { dbReducer } from './dbReducer';
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  db: dbReducer,
  user: userReducer
});
