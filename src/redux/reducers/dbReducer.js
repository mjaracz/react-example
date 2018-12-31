import {
  FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
  DELETE_USER, USER_RES }
  from '../actions/dbActions'

const InitialState = {
  users: [],
  isLoading: true,
  error: null,
  user: {}
};

export const dbReducer = (state=InitialState, action) => {
  switch(action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    }
    case DELETE_USER: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case USER_RES: {
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
};
