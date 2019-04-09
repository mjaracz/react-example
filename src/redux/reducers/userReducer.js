import {IMG_HEIGHT} from "../actions/userAction";

const InitialState = {
  imgHeight: 0
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case IMG_HEIGHT: {
      return {
        ...state,
        imgHeight: action.payload
      }
    }
    default: {
      return state
    }
  }
};
