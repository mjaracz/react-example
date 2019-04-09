import {all} from 'redux-saga/effects';
import {getWatcher} from './getUserSaga';
import {postWatcher} from './postUserSaga';
import {deleteWatcher} from "./deleteUserSaga";

export default function* rootSaga() {
  yield all([
    postWatcher(),
    getWatcher(),
    deleteWatcher()
  ])
}
