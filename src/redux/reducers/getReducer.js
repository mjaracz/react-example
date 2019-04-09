import {
  GET_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/getUsers'

const InitialState = {
  users: [],
  isLoading: true,
  error: null,
  user: {}
};

export const getReducer = (state=InitialState, action) => {
  switch(action.type) {
    case GET_USERS: {
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
        isLoading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
};
