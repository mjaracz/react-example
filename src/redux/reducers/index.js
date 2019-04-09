import {combineReducers} from 'redux';
import {getReducer} from './getReducer';
import {postReducer} from './postReducer';
import {deleteReducer} from './deleteReducer';

export const rootReducer = combineReducers({
  getUser: getReducer,
  postUser: postReducer,
  deleteUser: deleteReducer
});
