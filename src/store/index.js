import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
