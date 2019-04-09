import {put, call, takeEvery} from 'redux-saga/effects';
import {deleteApi} from '../api';
import {DELETE_USER, FETCH_ERROR, FETCH_USER} from '../actions/deleteUser';

export function* deleteUser(action) {
  const url = `https://json-fake-user-data.herokuapp.com/users/${action.payload}`;
  try {
    const res = yield call(deleteApi, url, action.payload);
    yield put({type: FETCH_USER, payload: res});
  }
  catch(e) {
    yield put({type: FETCH_ERROR, payload: e});
  }
}

export function* deleteWatcher() {
  yield takeEvery(DELETE_USER, deleteUser)
}
