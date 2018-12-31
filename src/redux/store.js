import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';


export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
