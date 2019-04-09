import {put, call, takeEvery} from 'redux-saga/effects';
import {FETCH_ERROR, FETCH_USER, POST_USER} from "../actions/postUser";
import {post} from '../api';

function* postUser(action) {
  const url = 'https://json-fake-user-data.herokuapp.com/users';
  try{
    const response = yield call(post, url, action.payload);
    yield put({type: FETCH_USER, payload: response});
  }
  catch(e) {
    yield put({type: FETCH_ERROR, payload: e});
  }
}

export function* postWatcher() {
  yield takeEvery(POST_USER, postUser)
}
