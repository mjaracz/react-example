import {
  POST_USER,
  FETCH_USER,
  FETCH_ERROR
} from "../actions/postUser";

const InitialState = {
  user: {},
  isLoading: false,
  error: {}
};

export const postReducer = (state = InitialState, action) => {
  switch (action.type) {
    case POST_USER: {
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
