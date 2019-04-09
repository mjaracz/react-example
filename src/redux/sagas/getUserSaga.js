import {put, call, takeEvery} from 'redux-saga/effects';
import {GET_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS} from "../actions/getUsers";
import {get} from "../api";


function* getUser() {
  const url = 'https://json-fake-user-data.herokuapp.com/users';
  try {
    const userData = yield call(get, url);
    yield put({type: FETCH_USERS_SUCCESS, payload: userData})
  }
  catch(e) {
    yield put({type: FETCH_USERS_FAILURE, payload: e})
  }
}

export function* getWatcher() {
  yield takeEvery(GET_USERS, getUser)
}
