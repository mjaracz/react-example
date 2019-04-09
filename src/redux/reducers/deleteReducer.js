import {
  DELETE_USER,
  FETCH_USER,
  FETCH_ERROR
} from "../actions/deleteUser";

const InitialState = {
  isLoading: false,
  error: {},
  user: {}
};

export const deleteReducer = (state = InitialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    case FETCH_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
};
